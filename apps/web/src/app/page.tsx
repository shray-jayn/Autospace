'use client'
import { add } from '@autospace/sample-lib'
import { useQuery } from '@apollo/client'
import { CompaniesDocument } from '@autospace/network/src/gql/generated'
import { BrandIcon } from '@autospace/ui/src/components/atoms/BrandIcon'
import { Button} from '@autospace/ui/src/components/atoms/Button'

export default function Home() {
  const { data, loading } = useQuery(CompaniesDocument)

  return (
    <main className='bg-primary'>
      <BrandIcon/>
      <Button/>
      Hello {add({ a: 342, b: 12 })}
      <div>
        {data?.companies.map((company) => (
          <div className="p-4 rounded" key={company.id}>
            <div>{company.description}</div>
            <div>{company.description}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
