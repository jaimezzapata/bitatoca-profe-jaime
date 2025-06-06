import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";

export function CargaDocumentacionBasesDeDatos() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // Aquí va la lógica para manejar el envío del formulario
    } catch (error) {
      console.error("Error al cargar la documentación:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Selecciona el archivo
        </label>
        <div className="mt-1">
          <input
            type="file"
            {...register("documento")}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
          />
          {errors.documento && (
            <p className="mt-2 text-sm text-red-600">
              {errors.documento.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-3 py-2 bg-pink-600 text-white rounded font-semibold shadow-sm hover:bg-pink-700 transition-colors text-sm"
      >
        Cargar documentación
      </button>
    </form>
  );
}