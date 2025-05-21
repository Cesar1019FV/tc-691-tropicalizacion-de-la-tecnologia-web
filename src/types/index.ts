export interface Proyecto {
  id: string
  nombre: string
  descripcionCorta: string
  descripcion: string
  categoria: string
  imagen: string
  galeria: string[]
  enlaces: {
    titulo: string
    url: string
  }[]
  destacado?: boolean
}

export interface Categoria {
  id: string
  nombre: string
}
