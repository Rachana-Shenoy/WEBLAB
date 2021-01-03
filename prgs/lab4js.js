function LMV(str){
    for(i=0;i<str.length;i++){
        if(str.charAt(i)=='a'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o'||str.charAt(i)=='u'){
         return("left most vowel of "+str+" is at location"+(i+1));
        }
        
    }
    return("no vowels found for "+str);
}

function reverse(num){
    rev=0;
    t=num;
    if(isNaN(num)){
        return("not a number");
    }
    while(num!=0){
        rev*=10;
        rev+=num%10;
        num-=num%10;
        num=Math.floor(num/10);
    }
    return("reverse of num "+t+" is "+rev);
}