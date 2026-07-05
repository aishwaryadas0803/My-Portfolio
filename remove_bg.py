import sys
import os
from PIL import Image
from rembg import remove

def main():
    input_path = r"c:\Users\aishw\OneDrive\Desktop\Portfolio\my-portfolio\Theme photo.png"
    output_path = r"c:\Users\aishw\OneDrive\Desktop\Portfolio\my-portfolio\client\public\illustration.png"

    if not os.path.exists(input_path):
        print(f"Error: Input file {input_path} does not exist.")
        sys.exit(1)

    print("Executing background removal process...")
    print("Please note: On the very first run, rembg will download the U2Net model (approx 170MB) to your machine. This might take a minute.")

    try:
        input_image = Image.open(input_path)
        output_image = remove(input_image)
        output_image.save(output_path)
        print("Success! Cutout saved to:", output_path)
    except Exception as e:
        print("An error occurred during background removal:", str(e))
        sys.exit(1)

if __name__ == "__main__":
    main()
