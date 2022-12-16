import type { NextPage } from 'next'
import { useState } from 'react'
import { QrReader } from '../utils/ QRReader/Implementation'

const Home: NextPage = () => {
  const [data, setData] = useState('読み取り結果はここに表示')
  const [isOpened, setIsOpened] = useState(false)

  const openQRReader = () => setIsOpened(true)
  const closeQRReader = () => setIsOpened(false)

  return (
    <div>
      <h1>読み取り結果：{data}</h1>
      <button onClick={openQRReader}>起動</button>
      <button onClick={closeQRReader}>停止</button>
      {isOpened && (
        <QrReader
          constraints={{ facingMode: 'environment' }}
          onResult={(result, error) => {
            if (!!result) {
              // @ts-ignore
              setData(result?.text)
            }

            if (!!error) {
              console.info(error)
            }
          }}
          // @ts-ignore
          style={{ width: '100%' }}
        />
      )}
    </div>
  )
}

export default Home
