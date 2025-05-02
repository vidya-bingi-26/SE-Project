const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
      // Execute request handler and catch any promise rejection errors
      Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
  };
  
  export { asyncHandler };
  

/*const asyncHandler=(requestHandler)=>{
    return (req,res,next)=>
    {
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}*/