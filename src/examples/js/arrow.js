function fun2 () {
  console.log('Fun with JS')
}

const fun3 = () => {
  console.log('Fun with JS')
}

const fun4 = () => 42

const o2 = {
  bar: 'bar',
  foo() {
    console.log(this.bar)
  }
}
o2.foo2 = () => console.log(this.bar)
o2.foo()
o2.foo2()