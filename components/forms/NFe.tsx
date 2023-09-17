import { Nfe } from '@/types'
import React from 'react'
import {useForm, SubmitHandler } from 'react-hook-form'
import { ButtonHeader } from '@/components'
import { useParams, useSearchParams } from 'next/navigation'




export const NFe = () => {
  const fields = useSearchParams().get('field')
  console.log(fields)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Nfe>()
      const onSubmit: SubmitHandler<Nfe> = (data) => console.log(data)
    
      console.log(watch("ICMSFields.CST")) // watch input value by passing the name of it
      
      return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className='max-w-4xl m-auto'>
          <ButtonHeader/>
        
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-gray-700 m-auto flex-wrap max-w-4xl flex-grow gap-8 p-10 justify-around '>
        {/* Para ICMSFields */}
        {fields == 'icms' || fields == null ? 
          <div className='icms grid grid-cols-2 gap-8 bg-gray-800 p-4 rounded-sm'>
            <h3 className='self-center'>ICMS</h3>
            <label className='flex justify-between max-w-sm'>
              <span>CST</span>
              <input defaultValue="test" {...register("ICMSFields.CST")} />
            </label>
            <label className='flex justify-between max-w-sm'>
              <span>Origem</span>
              <input defaultValue="test" {...register("ICMSFields.Origem")} />
            </label>
            <label className='flex justify-between max-w-sm'>
              <span>ModBC</span>
              <input defaultValue="test" {...register("ICMSFields.ModBC")} />
            </label>
            <label className='flex justify-between max-w-sm'>
              <span>VBC</span>
              <input defaultValue="test" {...register("ICMSFields.VBC")} />
            </label>
            <label className='flex justify-between max-w-sm'>
              <span>PICMS</span>
              <input defaultValue="test" {...register("ICMSFields.PICMS")} />
            </label>
            <label className='flex justify-between max-w-sm'>
              <span>VICMS</span>
              <input defaultValue="test" {...register("ICMSFields.VICMS")} />
            </label>
            <label className='flex justify-between max-w-sm'>
              <span>ModBCST</span>
              <input defaultValue="test" {...register("ICMSFields.ModBCST")} />
            </label>
            <label className='flex justify-between max-w-sm'>
              <span>VBCST</span>
              <input defaultValue="test" {...register("ICMSFields.VBCST")} />
            </label>
            <label className='flex justify-between max-w-sm'>
              <span>PICMSST</span>
              <input defaultValue="test" {...register("ICMSFields.PICMSST")} />
            </label>
            <label className='flex justify-between max-w-sm'>
              <span>VICMSST</span>
              <input defaultValue="test" {...register("ICMSFields.VICMSST")} />
            </label>
            <label className='flex justify-between max-w-sm'>
              <span>pRedBC</span>
              <input defaultValue="test" {...register("ICMSFields.pRedBC")} />
            </label>
            <label className='flex justify-between max-w-sm'>
              <span>vRedBC</span>
              <input defaultValue="test" {...register("ICMSFields.vRedBC")} />
            </label>
            <label className='flex justify-between max-w-sm'>
              <span>pMVAST</span>
              <input defaultValue="test" {...register("ICMSFields.pMVAST")} />
            </label>
            <label className='flex justify-between max-w-sm'>
              <span>pICMSST</span>
              <input defaultValue="test" {...register("ICMSFields.pICMSST")} />
            </label>
            <label className='flex justify-between max-w-sm'>
              <span>vICMSDeson</span>
              <input defaultValue="test" {...register("ICMSFields.vICMSDeson")} />
            </label>
          </div> 
          : ''}

          {/* Para IPIFields */}
          {
            fields == 'ipi' ? 
          <div className='ipi flex flex-col gap-8 bg-gray-800 p-4 rounded-sm'>
            <h3 className='self-center'>IPI</h3>
            <label className='flex justify-between'>
              <span>CST</span>
              <input defaultValue="test" {...register("IPIFields.CST")} />
            </label>
            <label className='flex justify-between'>
              <span>ClEnq</span>
              <input defaultValue="test" {...register("IPIFields.ClEnq")} />
            </label>
            <label className='flex justify-between'>
              <span>CNPJProd</span>
              <input defaultValue="test" {...register("IPIFields.CNPJProd")} />
            </label>
            <label className='flex justify-between'>
              <span>cSelo</span>
              <input defaultValue="test" {...register("IPIFields.cSelo")} />
            </label>
            <label className='flex justify-between'>
              <span>qSelo</span>
              <input defaultValue="test" {...register("IPIFields.qSelo")} />
            </label>
            <label className='flex justify-between'>
              <span>cEnq</span>
              <input defaultValue="test" {...register("IPIFields.cEnq")} />
            </label>
            <label className='flex justify-between'>
              <span>vBC</span>
              <input defaultValue="test" {...register("IPIFields.vBC")} />
            </label>
            <label className='flex justify-between'>
              <span>pIPI</span>
              <input defaultValue="test" {...register("IPIFields.pIPI")} />
            </label>
            <label className='flex justify-between'>
              <span>vIPI</span>
              <input defaultValue="test" {...register("IPIFields.vIPI")} />
            </label>
          </div>
          :
          ''}
          {/* Para PISFields */}
          {fields == 'pis' ? 
          <div className='pis flex flex-col gap-8 bg-gray-800 p-4 rounded-sm'>
            <h3 className='self-center'>PIS</h3>
            <label className='flex justify-between'>
              <span>CST</span>
              <input defaultValue="test" {...register("PISFields.CST")} />
            </label>
            <label className='flex justify-between'>
              <span>vBC</span>
              <input defaultValue="test" {...register("PISFields.vBC")} />
            </label>
            <label className='flex justify-between'>
              <span>pPIS</span>
              <input defaultValue="test" {...register("PISFields.pPIS")} />
            </label>
            <label className='flex justify-between'>
              <span>vPIS</span>
              <input defaultValue="test" {...register("PISFields.vPIS")} />
            </label>
            {/* Continuar para os outros atributos do PISFields... */}
          </div>
          : 
          ''}
          {/* Para COFINSFields */}
          {fields == 'cofins' ? 
          
          <div className='cofins flex flex-col gap-8 bg-gray-800 p-4 rounded-sm'>
            <h3 className='self-center'>COFINS</h3>
            <label className='flex justify-between'>
              <span>CST</span>
              <input defaultValue="test" {...register("COFINSFields.CST")} />
            </label>
            <label className='flex justify-between'>
              <span>vBC</span>
              <input defaultValue="test" {...register("COFINSFields.vBC")} />
            </label>
            <label className='flex justify-between'>
              <span>pCOFINS</span>
              <input defaultValue="test" {...register("COFINSFields.pCOFINS")} />
            </label>
            <label className='flex justify-between'>
              <span>vCOFINS</span>
              <input defaultValue="test" {...register("COFINSFields.vCOFINS")} />
            </label>
            
            {/* Continuar para os outros atributos do COFINSFields... */}
          </div>
        :
            ''}
          <input type="submit" />
        </form>
        </div>
      )
}

export default NFe;