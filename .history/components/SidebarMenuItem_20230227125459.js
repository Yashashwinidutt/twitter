
export default function SidebarMenuItem({text, Icon}) {
  return (
    <div className="hoverEffect flex">
        <Icon className="h-7"/>
        <span>{text}</span>
    </div>
  )
}
