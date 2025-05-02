// utils/ApiError.js
class ApiError extends Error {
    constructor(
      statusCode,
      message = "Something went wrong",
      errors = [],
      stack = ""
    ) {
      super(message);
  
      this.statusCode = statusCode;   // HTTP status code (e.g., 404, 500)
      this.message = message;         // Error message
      this.errors = errors;           // Any additional error data (optional)
      this.success = false;           // Flag to indicate a failed operation
      this.data = null;               // Can be used for specific error data (optional)
  
      // If stack trace is passed, use it; otherwise, generate it
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  export { ApiError };
  

/*class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false;
        this.errors=errors

        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export {ApiError}
*/
