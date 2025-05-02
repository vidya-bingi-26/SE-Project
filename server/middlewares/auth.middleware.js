import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (request, _, next) => {
  try {
    // Retrieve the token either from cookies or Authorization header
    const token = request.cookies?.accessToken || request.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request: No token provided");
    }

    // Decode and verify the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user in the database using the decoded token's _id
    const user = await User.findById(decodedToken?._id).select("-password");

    if (!user) {
      throw new ApiError(401, "Unauthorized request: Invalid access token (User not found)");
    }

    // Attach the user to the request object for further use in subsequent middlewares
    request.user = user;
    next();
  } catch (error) {
    console.error("Error in verifyJWT middleware:", error);  // Log the error for debugging purposes
    throw new ApiError(401, "Unauthorized request: Invalid or expired token");
  }
});



/*
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import jwt,{decode} from "jsonwebtoken";
import { User } from "../models/user.model";

export const verifyJWT=asyncHandler(async(request,_,next)=>{
    try{
        const token=request.cookies?.accessToken||request.header("Authorization")?.replace("Bearer ","")

        if(!token){
            throw new ApiError(401,"Unauthorized request")
        }

        const decodedToken=jwt.verify(token,process.env.JWT_SECRET);
        
        const user=await User.findById(decodedToken?._id).select("-password")

        if(!user){
            throw new ApiError(401,"Invalid Access Token")

        }
        request.user=user;
        next();

    }catch(error){
        throw new ApiError(401,"Invalid Access Token")
    }
})*/