import { v2 as cloudinary } from "cloudinary"
import { response } from "express"
import fs from "fs"

cloudinary.config({
  cloud_name: process.env.CLOUDINAR_CLOUD_NAME,
  api_key: process.env.CLOUDINAR_API_KEY,
  api_secret: CLOUDINAR_API_SECRET,
})

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null

    const reponse = cloudinary.uploader.upload(localFilePath, {
      resourse_type: "auto",
    })
    console.log("file uploaded on cloudinary", response.url)
    return response
  } catch (error) {
    fs.unlinkSync(localFilePath)
    return null
  }
}
export { cloudinary }
