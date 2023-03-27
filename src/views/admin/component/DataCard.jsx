import { Card, Row, Text, Grid } from '@nextui-org/react'
import React from 'react'
import styles from '../../../style'

const DataCard = ({header, total, percent, trending, footer}) => {
  return (
    <Grid xs={4} >
        <Card isHoverable>
            <Card.Header className='bg-royalBlue'>
                  <Text h3 className={`${styles.copyright} ml-4`} css={{ color: '$white', opacity: 0.5 }}>{header}</Text>
            </Card.Header>
            <Card.Body className='bg-royalBlue'>
                <Row justify={'flex-start'} align='flex-end'>
                      <Text h2 className='font-poppins font-bold text-2xl ml-4' css={{color: '$white'}}>{total}</Text>
                      <Text h5 className='font-poppins font-medium mx-3 ml-4' css={{ color: '$white', opacity: 0.5 }}>{percent}</Text>
                    <img src={trending} alt=""/>
                </Row>
            </Card.Body>
            <Card.Footer className='bg-royalBlue'>
          <Text h5 className='font-poppins font-medium ml-4' css={{ color: '$white', opacity: 0.5 }}>{footer}</Text>
            </Card.Footer>
        </Card>
    </Grid>
  )
}

export default DataCard