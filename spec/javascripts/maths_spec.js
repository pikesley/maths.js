describe('simple maths', function() {
  it('adds two numbers', function() {
    expect(Add(19, 12)).toEqual(31)
  })

  it('subtracts one number from another', function() {
    expect(Subtract(19, 12)).toEqual(7)
  })
})
