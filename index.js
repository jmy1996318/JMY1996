function systemSync(cmd) {
  try {
    var child_process = require("child_process");
    return child_process.execSync(cmd, { encoding: "utf-8" })
  } catch (error) {
    return error.output[1];
    
  }
}
exports.handler = async (event,context,callback) => {
    var query = event.queryStringParameters||{}
    var res = {}
  
   
    
    if(query.page==="index" ){
      res = {
        statusCode: 200,
        headers: {
          "Content-Type": "text/html"
        },
        body:systemSync("cat /var/task/index.html")
      };
    }
    if(query.page==="invitation"){
      res = {
        statusCode: 200,
        headers: {
          "Content-Type": "text/html"
        },
        body:systemSync("cat /var/task/invitation.html")
      };
    }
    if(!query.page){
        res = {
          statusCode: 200,
          headers: {
            "Content-Type": "text/html"
          },
          body:systemSync("cat /var/task/home.html")
        };
    }
    return res
   
};
