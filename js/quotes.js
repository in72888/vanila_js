const quotes = [
    {
        quote: "자신 있으면 돼요. 다른 사람 신경 안써도 돼요. 자신있으면 세상에서 제일 예쁩니다.",
        author: "천러"
    },
    {
        quote: "Are you nervous? Don't be.",
        author: "마크"
    },
    {
        quote: "Your past is not your future.",
        author: "재현"
    },
    {
        quote: "평범한 것도 나쁜 일은 아니죠. 하지만 누구도 당신의 인생을 평범하다고 말할 수는 없어요.",
        author: "런쥔"
    },
    {
        quote: "달을 잡았어 너에게 줄게",
        author: "윈윈"
    },
    {
        quote: "인생은 딱 한 번이에요, 자신에게 좀 더 잘해야 해요.",
        author: "헨드리"
    },
    {
        quote: "피곤함은 잠시, 명예는 평생",
        author: "천러"
    },
    {
        quote: "예의 없이 보이지 말되 얕보이지 말자",
        author: "지성"
    },
    {
        quote: "나를 내가 사랑해야 남들이 나를 사랑하지 않다고 생각이 들어도 괜찮더라 ",
        author: "도영"
    },
    {
        quote: "벽은 넘을 수 있는 사람에게만 온다.",
        author: "유타"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
