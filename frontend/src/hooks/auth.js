import { useContext } from 'react'
import { AuthContext } from '~/contexts/auth'

function useAuth() {
  console.log(AuthContext)
  return useContext(AuthContext)
}

export default useAuth
