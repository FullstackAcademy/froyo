const froyoFlavors = prompt( "Enter your favorite froyo flavors: " )

const froyoFlavorsArray = froyoFlavors.split( "," ).map( ( flavor ) => flavor.trim() )
console.log( froyoFlavorsArray )


function froyoFlavorCount( froyoFlavorsArray ) {
  const flavorCount = {}
  for ( let i = 0; i < froyoFlavorsArray.length; i++ ) {
    const flavor = froyoFlavorsArray[ i ]
    if ( flavorCount[ flavor ] ) {
      flavorCount[ flavor ]++
    } else {
      flavorCount[ flavor ] = 1
    }
  }
  return flavorCount
}
const flavorCount = froyoFlavorCount( froyoFlavorsArray )
console.log( "Flavor Count: ", flavorCount )



