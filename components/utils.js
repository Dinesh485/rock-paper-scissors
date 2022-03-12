export function getResult(input, cInput){
    if(input === cInput){
        return 'draw'
    }
    if(input === 'rock'){
        switch(cInput){
            case 'paper':
                return 'lost';
            case 'scissor':
                return 'won';
            default:
                return 'draw'       
        }
    }else if(input ==='paper'){
        switch(cInput){
            case 'rock':
                return 'won';
            case 'scissor':
                return 'lost'
            default:
                return 'draw' 
        }
    }else if(input ==='scissor'){
        switch(cInput){
            case 'rock':
                return 'lost';
            case 'paper':
                return 'won'
            default:
                return 'draw' 
        }
    }
}

export function getCinput(){
    const options = ['rock', 'paper', 'scissor']
    return options[Math.floor(Math.random() * options.length)]
}