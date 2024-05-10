import BranchPage from "@/app/components/layouts/BranchPage"

interface BranchProps {
   id: number | string
}

export default function Branch({ params }: { params: BranchProps }) {
   return (
      <>
         <BranchPage branchID={params.id} />
      </>
   )
}
