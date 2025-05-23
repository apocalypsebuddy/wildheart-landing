import fs from "fs";
import path from "path";
import sharp from "sharp"; // Add sharp for image processing

const galleryImagePath = path.join(process.cwd(), "public", "img", "gallery");
const imageFiles = fs.readdirSync(galleryImagePath);

// I wrote this for a one time use to create JSON data using the image directory, it's not used anywhere
export async function getGalleryImages() {
  const validExtensions = [".jpg", ".jpeg", ".png"];
  const imageFiles = fs.readdirSync(galleryImagePath).filter((file) => {
    // Check for valid file extensions
    const ext = path.extname(file).toLowerCase();
    return validExtensions.includes(ext);
  });

  // Map through the images and get their metadata (dimensions) using sharp
  const imageObjects = await Promise.all(
    imageFiles.map(async (file) => {
      const imagePath = path.join(galleryImagePath, file);
      const imageMetadata = await sharp(imagePath).metadata(); // Get image metadata

      return {
        src: `/img/gallery/${file}`, // Image URL path
        title: file.replace(/\.[^/.]+$/, ""), // Extract title by removing the file extension
        width: imageMetadata.width, // Extract image width
        height: imageMetadata.height, // Extract image height
        alt: "",
      };
    })
  );

  return imageObjects;
}

console.log(JSON.stringify(await getGalleryImages()));
