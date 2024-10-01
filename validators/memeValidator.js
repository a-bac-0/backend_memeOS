import { body, param } from "express-validator";

export const createMemeValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("El campo nombre es requerido")
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener al menos 2 caracteres"),
  body("date")
    .notEmpty()
    .withMessage("La fecha es requerida")
    .isDate()
    .withMessage("La fecha debe ser una fecha válida"),
  body("author")
    .trim()
    .notEmpty()
    .withMessage("El campo autor es requerido")
    .isLength({ min: 2 })
    .withMessage("El autor debe tener al menos 2 caracteres"),
  body("stream")
    .trim()
    .notEmpty()
    .withMessage("El campo corriente es requerido")
    .isLength({ min: 2 })
    .withMessage("El campo corriente debe tener al menos 2 caracteres"),
  body("description")
    .trim()
    .notEmpty()
    .withMessage("El campo descripción es requerido"),
  body("image")
    .notEmpty()
    .withMessage("La imagen es obligatoria")
    .isURL()
    .withMessage("La imagen debe ser una URL válida"),
]

export const updateMemeValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("El campo nombre es requerido")
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener al menos 2 caracteres"),
  body("date")
    .notEmpty()
    .withMessage("La fecha es requerida")
    .isDate()
    .withMessage("La fecha debe ser una fecha válida"),
  body("author")
    .trim()
    .notEmpty()
    .withMessage("El campo autor es requerido")
    .isLength({ min: 2 })
    .withMessage("El autor debe tener al menos 2 caracteres"),
  body("stream")
    .trim()
    .notEmpty()
    .withMessage("El campo corriente es requerido")
    .isLength({ min: 2 })
    .withMessage("El campo corriente debe tener al menos 2 caracteres"),
  body("description")
    .trim()
    .notEmpty()
    .withMessage("El campo descripción es requerido"),
]

export const idValidator = [
    param('id')
    .notEmpty().withMessage('El ID del meme es obligatorio'),
];