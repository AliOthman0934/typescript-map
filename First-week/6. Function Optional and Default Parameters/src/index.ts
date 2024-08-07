let ShowMas :string = "Hallo";
let Hi = "hallo"
function SayHi( name: any , age:number , mas:string):string{

    if(ShowMas){
        return `${name} your age is ${age} and you are ${mas}` 
    }
    return ShowMas
}