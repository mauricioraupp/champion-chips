import { MoreHorizontal } from '@geist-ui/icons';
import Image from 'next/image';

export function ChampCreated(){

  return(
    <div className="relative flex gap-4 border-2 rounded-md border-neutral-300 w-fit py-3 px-6 m-auto divide-x-2 divide-stone-300 cursor-pointer">
      <section className="pr-6 flex flex-col">
        <h1 className="font-semibold">Título</h1>
        <p className="font-medium text-neutral-700">Esporte: Esporte</p>
        <p className="font-medium text-neutral-700">Formato: Formato</p>
        <p className="font-medium text-neutral-700">Fase: Fase</p>
      </section>

      <section className="pr-6 hidden lg:flex flex-col justify-between items-center">
        <h1 className="font-medium text-neutral-700">Última partida</h1>
        <article className="flex items-center">
          <Image
            src="/escudo.png"
            width={40}
            height={40}
            alt="Escudo do time"
          />
          <p className="font-medium text-neutral-700">0 x 0</p>
          <Image
            src="/escudo.png"
            width={40}
            height={40}
            alt="Escudo do time"
          />
        </article>
        <p className="font-medium text-neutral-700">01/01/2001</p>
      </section>

      <section className="pr-6 hidden lg:flex flex-col justify-between items-center">
        <h1 className="font-medium text-neutral-700">Próxima partida</h1>
        <article className="flex items-center">
          <Image
            src="/escudo.png"
            width={40}
            height={40}
            alt="Escudo do time"
          />
          <p className="font-medium text-neutral-700">0 x 0</p>
          <Image
            src="/escudo.png"
            width={40}
            height={40}
            alt="Escudo do time"
          />
        </article>
        <p className="font-medium text-neutral-700">01/01/2001</p>
      </section>

      <section className="mr-5">
        <table className="divide-y-2 divide-neutral-300 h-full">
          <thead>
            <tr className="*:px-2 *:text-center">
              <th className="text-left!">Equipe</th>
              <th>Pts</th>
              <th>PJ</th>
              <th>V</th>
              <th>E</th>
              <th>D</th>
              <th>GM</th>
              <th>GC</th>
              <th>SG</th>
            </tr>
          </thead>
          <tbody>
            <tr className="*:px-2 *:text-center">
              <td className="text-left!">1 Time1</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr className="*:px-2 *:text-center">
              <td className="text-left!">2 Time2</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr className="*:px-2 *:text-center">
              <td className="text-left!">3 Time3</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
        <MoreHorizontal className="absolute right-2 top-0 z-2 cursor-pointer"/>
      </section>
    </div>
  )
}