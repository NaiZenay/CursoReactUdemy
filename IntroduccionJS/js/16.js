//evalucion de corto circuito
const auth = true;

auth && console.log("user auth");


// WTF javaScript
if(20){
    console.log("user auth (truthy)");
}else{
    console.log("user auth`nt (falsy)");
}