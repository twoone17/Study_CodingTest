let deque = []
function push_front(x)
{
    deque.unshift(x)
}
function push_back(x)
{
    deque.push(x)
}
function pop_front()
{
    let returnVal;
    if(deque.length)
    {
        returnVal = deque.shift()
    }
    else
    {
        returnVal = -1
    }

    return returnVal
}

function pop_back()
{
    let returnVal;
    if(deque.length)
    {
        returnVal = deque.pop()
    }
    else
    {
        returnVal = -1
    }

    return returnVal
}

function size()
{
    return deque.length
}

function empty()
{
    if(deque.length)
    {
        return 0
    }
    else
    {
        return 1
    }
}
function front()
{
    if(deque.length)
    {
        return deque[0]
    }
    else
    {
        return -1
    }
}

function back()
{
    if(deque.length)
    {
        return deque.at(-1)
    }
    else
    {
        return -1
    }
}

const fs =require('fs')
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
let n = input.shift()
let line;
let result = ''
while(line = input.shift())
{
    let command = line.split(' ')
    if(command.length === 2)
    {
        if(command[0] === 'push_back')
        {
            push_back(parseInt(command[1]))
        }
        else if(command[0] === 'push_front')
        {
            push_front(parseInt(command[1]))
        }
    }
    else
    {
        if(command[0] === 'pop_front')
        {
            result += pop_front()
        }
        else if(command[0] === 'pop_back')
        {
            result += pop_back()
        }
        else if(command[0] === 'size')
        {
            result += size()
        }
        else if(command[0] === 'empty')
        {
            result += empty()
        }
        else if(command[0] === 'front')
        {
            result += front()
        }
        else if(command[0] === 'back')
        {
            result += back()
        }
        result += '\n'
    }

}
console.log(result)