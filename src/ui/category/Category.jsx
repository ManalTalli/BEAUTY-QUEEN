import { Button, Card, Grid, Typography } from '@mui/material'

export default function Category({category,onSelect}) {
  return (
    <Grid  size={{xs:12,sm:6,md:4,lg:2.3}} textAlign='center' >
       <Card key={category.id} sx={{padding:'10px'}}>
        <Button onClick={() => onSelect(category.id)} underline='none' color='#111'>{category.name}</Button> 
        </Card>
        </Grid>
  )
}
