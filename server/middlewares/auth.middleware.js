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
})