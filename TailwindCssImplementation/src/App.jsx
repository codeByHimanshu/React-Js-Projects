
import './App.css'
import Card from './components/cards'

function App() {

  const obj ={
    Name :'himanshu',
    age :18,
    curse :'cse'
  }
  let arr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-red-400 text-black p-4 rounded-xl mb-4'>Tailwind Css</h1>
    
      <Card objectName ="mackbook" btnText="click here"/> 
      <Card objectName="mackbook here" btnText="readMore" />
    </>
  )
}

export default App
