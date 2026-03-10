import { useState, useEffect } from "react"

export default function TeamCard({ team, onUpdate }: { team: any, onUpdate: () => void }) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: team.name,
    sigla: team.sigla,
    logo: team.logo,
    createdAt: team.createdAt,
    players: team.Players
  })

  // const handleSave = async () => {
  //   const result = await updateTeam(team.id, formData)
  //   if (result.success) {
  //     setIsEditing(false)
  //     onUpdate()
  //   } else {
  //     alert("Erro ao salvar")
  //   }
  // }

  useEffect(() => {
    setFormData({
      name: team.name,
      sigla: team.sigla,
      logo: team.logo,
      createdAt: team.createdAt,
      players: team.Players
    });
  }, [team]);

  if (!team) return null;
  
  return(
    <div 
      className={`flex items-center justify-center w-32 sm:w-60 h-32 sm:h-52 border border-neutral-300 rounded-xs bg-neutral-100
        hover:scale-105 hover:shadow-lg cursor-pointer transition-all`
      }>
      <div className="flex flex-col items-center justify-center gap-2">
        <figure className={`w-12 sm:w-20 h-12 sm:h-20`}>
          <img src={team.logo} className="w-full h-full object-cover rounded-full"/>
        </figure>
        <span className={`font-medium text-neutral-900 sm:text-lg truncate max-w-28 sm:max-w-56`}>
          {team.name}
        </span>
      </div>
    </div>
  )
}