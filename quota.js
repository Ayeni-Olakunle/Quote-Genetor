const quote = ()=>{
    let generate = document.getElementById("generate")
    let text = document.getElementById("JStext")
    let list = [
        "“How you sell matters. What your process is matters. But how your customers feel when they engage with you matters more.” – Tiffani Bova",
        "“Keep your sales pipeline full by prospecting continuously. Always have more people to see than you have time to see them.” – Brian Tracy",
        "“The secret of getting ahead is getting started.” – Mark Twain",
        "“Motivation will almost always beat mere talent.” – Norman Ralph Augustin",
        "“The man who will use his skill and constructive imagination to see how much he can give for a dollar, instead of how little he can give for a dollar, is bound to succeed.” – Henry Ford",
        "“If you keep on doing what you’ve always done, you’ll keep on getting what you’ve always got.” –  W. L. Bateman",
        "“Ninety percent of selling is conviction, and 10 percent is persuasion.” – Shiv Khera",
        "“Dreams don’t work unless you do.” –  John C. Maxwell",
        "“The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.” – Vince Lombardi",
        "“We must focus on purposes instead of just setting goals, for long-term vision is what keeps us from being frustrated by short-term failure.” – Dan Clark",
        "“One of the best predictors of ultimate success … isn’t natural talent or even industry expertise, but how you explain your failures and rejections.” – Daniel H. Pink",
        "“Hard work is about risk. It begins when you deal with the things that you’d rather not deal with: fear of failure, fear of standing out, fear of rejection. Hard work is about training yourself to leap over this barrier, drive through the other barrier. And after you’ve done that, to do it again the next day.” –  Seth Godin"
    ]

    function gena() {
        let list2 = list.length
        let list3 = Math.floor(list2*Math.random())
        text.innerHTML = list[list3]
    }
    generate.addEventListener("click", gena)
    
}
window.addEventListener("load", quote)

