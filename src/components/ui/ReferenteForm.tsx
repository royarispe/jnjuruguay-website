import React, {useState} from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { ReferenteFormProps } from './types';

const ReferenteForm: React.FC<ReferenteFormProps> = ({ control }) => {
  
  const [showOtherField, setShowOtherField] = useState(false);
  
  const dioceses = [
    "Diócesis de Canelones", "Diócesis de Florida", "Diócesis de Maldonado-Punta del Este-Minas",
    "Diócesis de Melo", "Diócesis de Mercedes", "Diócesis de Montevideo", "Diócesis de Salto",
    "Diócesis de San José de Mayo", "Diócesis de Tacuarembó",
  ];

  const movimientos = ["No", "Movimiento Salesiano", "Movimiento Scout"];

  const actividades = ["Servicio", "Taller"];

  const handleRestriccionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "Otros") {
      setShowOtherField(true);
    } else {
      setShowOtherField(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField name="referente.nombre" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Nombre</FormLabel>
          <FormControl>
            <input {...field} placeholder="Nombre" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.apellido" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Apellido</FormLabel>
          <FormControl>
            <input {...field} placeholder="Apellido" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.ci" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Cédula</FormLabel>
          <FormControl>
            <input {...field} placeholder="Cédula de Indentidad" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.celular" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Celular</FormLabel>
          <FormControl>
            <input {...field} placeholder="Celular" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.email" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <input {...field} placeholder="Email" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.fechaNacimiento" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Fecha de Nacimiento</FormLabel>
          <FormControl>
            <input {...field} type="date" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.restriccionAlimenticia" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Restricción Alimenticia</FormLabel>
          <FormControl>
            <select {...field} className="form-control mt-1 p-2 w-full border rounded text-black" onChange={(e) => { handleRestriccionChange(e); field.onChange(e); }} value={field.value}>
              <option value="No">No</option>
              <option value="Vegetariano">Vegetariano</option>
              <option value="Diabético">Diabético</option>
              <option value="Celíaco">Celíaco</option>
              <option value="Otros">Otros</option>
            </select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      {showOtherField && (
        <FormField name="referente.restriccionOtros" control={control} render={({ field }) => (
          <FormItem>
            <FormLabel>Especificar Restricción</FormLabel>
            <FormControl>
              <input {...field} placeholder="Especificar Restricción" className="form-control mt-1 p-2 w-full border rounded text-black" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
      )}
      <FormField name="referente.diocesis" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Diocesis</FormLabel>
          <FormControl>
            <select {...field} className="form-control mt-1 p-2 w-full border rounded text-black">
              <option value="">Seleccione una Diócesis</option>
              {dioceses.map((diocesis, index) => (
                <option key={index} value={diocesis}>{diocesis}</option>
              ))}
            </select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.movimiento" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Movimiento</FormLabel>
          <FormControl>
            <select {...field} className="form-control mt-1 p-2 w-full border rounded text-black">
              {movimientos.map((movimiento, index) => (
                <option key={index} value={movimiento}>{movimiento}</option>
              ))}
            </select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.prefActividad" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Actividad de preferencia</FormLabel>
          <FormControl>
            <select {...field} className="form-control mt-1 p-2 w-full border rounded text-black">
              {actividades.map((actividad, index) => (
                <option key={index} value={actividad}>{actividad}</option>
              ))}
            </select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.situacionSalud" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Situación de salud a considerar</FormLabel>
          <FormControl>
            <input {...field} placeholder="Situación de salud a considerar" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.contactoEmergencia" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Contacto de Emergencia</FormLabel>
          <FormControl>
            <input {...field} placeholder="Contacto de Emergencia" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.nombreContactoEmergencia" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Nombre Contacto de Emergencia</FormLabel>
          <FormControl>
            <input {...field} placeholder="Nombre Contacto de Emergencia" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="referente.vinculoContactoEmergencia" control={control} render={({ field }) => (
        <FormItem>
          <FormLabel>Vínculo Contacto de Emergencia</FormLabel>
          <FormControl>
            <input {...field} placeholder="Vínculo Contacto de Emergencia" className="form-control mt-1 p-2 w-full border rounded text-black" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
    </div>
  );
};

export default ReferenteForm;