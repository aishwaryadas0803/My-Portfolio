import os
import sys
from PIL import Image, ImageDraw, ImageFilter

def create_gradient(width, height, top_color, bottom_color):
    """Creates a vertical linear gradient image."""
    base = Image.new("RGB", (width, height), top_color)
    draw = ImageDraw.Draw(base)
    
    r1, g1, b1 = top_color
    r2, g2, b2 = bottom_color
    
    for y in range(height):
        ratio = y / float(height)
        r = int(r1 + (r2 - r1) * ratio)
        g = int(g1 + (g2 - g1) * ratio)
        b = int(b1 + (b2 - b1) * ratio)
        draw.line((0, y, width, y), fill=(r, g, b))
        
    return base

def draw_glow(image, center, radius, color, blur_radius):
    """Draws a soft, blurred radial glow on the image."""
    width, height = image.size
    glow_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(glow_layer)
    
    x, y = center
    left = x - radius
    top = y - radius
    right = x + radius
    bottom = y + radius
    
    draw.ellipse([left, top, right, bottom], fill=color)
    glow_blurred = glow_layer.filter(ImageFilter.GaussianBlur(blur_radius))
    image.paste(glow_blurred, (0, 0), glow_blurred)

def add_stars(image, stars_list):
    """Adds small twinkling stars/sparkles in the background."""
    width, height = image.size
    star_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(star_layer)
    
    for star in stars_list:
        cx, cy, radius, opacity, color = star
        left = cx - radius
        top = cy - radius
        right = cx + radius
        bottom = cy + radius
        
        fill_color = color + (int(255 * opacity),)
        draw.ellipse([left, top, right, bottom], fill=fill_color)
        
    star_blurred = star_layer.filter(ImageFilter.GaussianBlur(2))
    image.paste(star_blurred, (0, 0), star_blurred)

def main():
    cutout_path = r"c:\Users\aishw\OneDrive\Desktop\Portfolio\my-portfolio\temp_about_cutout.png"
    output_path = r"c:\Users\aishw\OneDrive\Desktop\Portfolio\my-portfolio\client\public\profile.jpg"
    
    if not os.path.exists(cutout_path):
        print(f"Error: Cutout file {cutout_path} not found.")
        sys.exit(1)
        
    print("Loading cutout...")
    cutout = Image.open(cutout_path).convert("RGBA")
    
    # Crop extra spaces from the photo using the custom tight bounding box
    # to keep only head, shoulders, and chest (excluding hands and frame)
    # Original is 1006 x 1280
    bbox = (220, 340, 780, 1030)
    print(f"Applying crop box: {bbox}")
    
    # Crop the cutout
    cropped_cutout = cutout.crop(bbox)
    c_width, c_height = cropped_cutout.size
    print(f"Cropped dimensions: {c_width}x{c_height}")
    
    # Target aspect ratio: 4:5
    target_w = 800
    target_h = 1000
    
    # Scale the cropped subject to fill ~96% of the height (960px)
    target_subject_h = 960
    scale_ratio = target_subject_h / c_height
    scaled_w = int(c_width * scale_ratio)
    scaled_h = target_subject_h
    
    print(f"Scaling cropped cutout to: {scaled_w}x{scaled_h}")
    scaled_cutout = cropped_cutout.resize((scaled_w, scaled_h), Image.Resampling.LANCZOS)
    
    # Create the background gradient
    top_color = (13, 13, 16)       # deep charcoal grey
    bottom_color = (3, 3, 4)       # near pitch black
    print("Generating gradient base...")
    background = create_gradient(target_w, target_h, top_color, bottom_color)
    
    bg_rgba = background.convert("RGBA")
    
    # Add radial glows
    pink_rgb = (224, 169, 109)
    lavender_rgb = (242, 212, 146)
    
    print("Drawing radial aura glows...")
    draw_glow(bg_rgba, center=(int(target_w * 0.5), int(target_h * 0.45)), radius=220, color=pink_rgb + (90,), blur_radius=100)
    draw_glow(bg_rgba, center=(int(target_w * 0.6), int(target_h * 0.55)), radius=180, color=lavender_rgb + (80,), blur_radius=90)
    draw_glow(bg_rgba, center=(int(target_w * 0.35), int(target_h * 0.35)), radius=280, color=(45, 60, 110, 45), blur_radius=130)
    
    # Add star sparkles
    print("Adding background star sparkles...")
    stars = [
        (int(target_w * 0.15), int(target_h * 0.15), 4, 0.75, lavender_rgb),
        (int(target_w * 0.85), int(target_h * 0.22), 5, 0.85, pink_rgb),
        (int(target_w * 0.1), int(target_h * 0.75), 3, 0.65, (255, 255, 255)),
        (int(target_w * 0.9), int(target_h * 0.45), 4, 0.75, lavender_rgb),
        (int(target_w * 0.75), int(target_h * 0.12), 3, 0.60, (255, 255, 255)),
        (int(target_w * 0.25), int(target_h * 0.35), 5, 0.70, pink_rgb),
    ]
    add_stars(bg_rgba, stars)
    
    # Composite the scaled cutout centered horizontally and aligned at the bottom
    paste_x = (target_w - scaled_w) // 2
    paste_y = target_h - scaled_h  # aligns at the bottom
    
    print(f"Compositing cutout onto the new themed background at position ({paste_x}, {paste_y})...")
    
    # Create final empty RGBA canvas
    final_canvas = Image.new("RGBA", (target_w, target_h), (0, 0, 0, 0))
    final_canvas.paste(bg_rgba, (0, 0))
    final_canvas.paste(scaled_cutout, (paste_x, paste_y), scaled_cutout)
    
    # Save final image as JPG
    print(f"Saving final image to {output_path}...")
    final_rgb = final_canvas.convert("RGB")
    final_rgb.save(output_path, "JPEG", quality=95)
    print("Successfully created the cropped and scaled themed profile picture!")

if __name__ == "__main__":
    main()
