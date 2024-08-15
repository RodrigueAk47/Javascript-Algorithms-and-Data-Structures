const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

const isAPalindrome = () => {
    if(textInput.value === "") {
        alert("Please Input a value");
        return ;
    }
    const enteredValue = textInput.value.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    const reverseValue = enteredValue.split('').reverse().join('');

    if (enteredValue === reverseValue) {
        result.innerHTML = `<strong> ${textInput.value} </strong>is a palindrome`;
    } else {
        result.innerHTML = `<strong> ${textInput.value} </strong>is not a palindrome`;
    }
}

checkBtn.addEventListener("click", isAPalindrome)

