import { Card, Grid } from '@mui/material'
import Link from '@mui/material/Link';
import { Link as routerLink } from 'react-router-dom';

export default function Category({category}) {
  return (
    <Grid  size={{xs:12,sm:6,md:4,lg:2.3}} textAlign='center' >
       <Card key={category.id} sx={{padding:'10px'}}>
        <Link component={routerLink} to ='/' underline='none' color='#111'>{category.name}</Link> 
        </Card>
        </Grid>
  )
}
