import { Button, Card, Grid } from '@mui/material'

export default function Category({category, onSelect}) {
  return (
    <Grid item sx={{ display: 'flex' }}>
       <Card 
         key={category.id} 
         elevation={0} 
         sx={{
           padding: '5px 15px', 
           borderRight: '1px solid #eee',
           borderRadius: 0, 
           whiteSpace: 'nowrap',
           transition: '0.3s',
           '&:hover': {
             bgcolor: 'text.secondary'
           }
         }}
       >
        <Button
          onClick={() => onSelect(category.id)}  
          sx={{ 
            color: 'text.primary', 
            fontWeight: 500, 
            textTransform: 'none', 
            minWidth: 'auto'
          }}
        >
          {category.name}
        </Button> 
       </Card>
    </Grid>
  )
}