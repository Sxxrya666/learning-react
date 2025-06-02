

const randomWords = ["IMPORTANT", "SEXY", "SOGGY", "WET"];
function getRandWord(maxVal){
   return Math.floor(Math.random() *  maxVal + 1)
}

export default function HeaderSeperator() {
  const output = randomWords[getRandWord(3)]
  console.log(output)
  return (
    <header>
      <img src="../src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {output} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}