export const getLeaveCardsRowLimit = (viewportWidth)=>{
    if(viewportWidth<=1435 && viewportWidth>1145){
        return 3;
    }
    else if(viewportWidth<=1145 && viewportWidth>850){
        return 2;
    }
    else if(viewportWidth<=850){
        return 1;
    }
    else{
        return 4;
    }
}