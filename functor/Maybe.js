class Maybe {
  constructor(value) {
    this._value = value
  }

  map = (f) => {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this._value))
  }

  isNothing = () => {
    return (this._value === null || this._value === undefined)
  }

  chain = (f) => {
    return this.map(f).join()
  }
  
  ap = (other) => {
    return this.isNothing() ? Maybe.of(null) : other.map(this._value)
  }
  
  join = () => {
    return this.isNothing() ? Maybe.of(null) : this._value
  }

}

Maybe.of = (val) => {
  return new Maybe(val)
}

export default Maybe

