import * as stylex from '@stylexjs/stylex'
import { colors } from './tokens.stylex'
import Feed from './Feed'

const styles = stylex.create({
  root: {
    color: colors.primaryText,
    width: '100%',
    height: '100%',
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
      
      <Feed/>
      
      </div>
  )
}

export default App
