import './css/main.scss'
import './index.html'

const test = async () => {
  const person = await { name: 'Jeremy', age: 18 }
  const aaa = { ...person }
  alert(aaa.name)
}

test()
