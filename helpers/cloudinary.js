// const cloudinary =  require("./cloudnaryfile");
const cloudinary = require("cloudinary").v2;

//configure with env data
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  timeout: 60000
});


const uploadMediaToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "lms",
      resource_type: "auto",
      upload_preset: "mern_apps",
      chunk_size: 12000000
    });

    return result;
  } catch (error) {
    console.log("cloudniar error -------->>",error);
    throw new Error("Error uploading to cloudinary");
  }
    


};

const deleteMediaFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.log(error);
    throw new Error("failed to delete assest from cloudinary");
  }
};

module.exports = { uploadMediaToCloudinary, deleteMediaFromCloudinary };
