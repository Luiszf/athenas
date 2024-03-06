import * as stylex from '@stylexjs/stylex'
import { colors } from './tokens.stylex'
import LogIn from './Login'

const styles = stylex.create({
  root: {
    color: colors.primaryText,
    width: '100vw',
    height: '100vh',
    backgroundColor: colors.background,
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'center',
    },
})


function App() {
  return (
      <div {...stylex.props(
        styles.root,
      )}>
      
      <LogIn/>
      
      </div>
  )
}

export default App
