/**
 * @providesModule objectSwitch
 */

export default function objectSwitch(value, target, exec = false) {
  return (target[value]
    ? ( exec ? target[value]() : target[value] )
    : ( target.default ? ( exec ? target.default() : target.default ) : null )
  )
}