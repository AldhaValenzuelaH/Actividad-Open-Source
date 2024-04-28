export class PeliculasModel {
   public id: any;
  public nombre: any;
  public foto: any;
  public duracion: any;
  public genero: any;
  constructor(id: any, nombre: any, foto: any, duracion: any, genero: any) {
    this.id = id;
    this.nombre = nombre;
    this.foto = foto;
    this.duracion = duracion;
    this.genero = genero;
  }
}
