

type MisProps = {
  children: React.ReactNode; // 👈️ type children
};

export const DarkLayout = ({children}: MisProps) => {
  return (
    <div style={
        {
            backgroundColor:'rgba(0,0,0,0.3)',
            borderRadius: '5px',
            padding:'10px'
        }
    }>
        <h3>DarkLayout</h3>
        <div>
            {children}
        </div>
    </div>
  )
}
