
module.exports = {
  presets: [
    ["@babel/env", 
    {
      targets: "> 0.25%, not dead", //browsers must have at least 25% share. cant be dead
      useBuiltIns: "entry", 
      corejs: "3"
    }]
  ]
}