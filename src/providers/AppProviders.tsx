import { BrowserRouter as Router } from 'react-router-dom'

import { AppProvidersProps } from './AppProviders.types'

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <Router>{children}</Router>
}
