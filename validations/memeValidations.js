import { body, param, validationResult } from "express-validator";

// ===============================
// Validaciones para crear un meme
// ===============================
export const validateCreateMeme = [
    body('name')
        .notEmpty().withMessage('El nombre es requerido')
        .isLength({ min: 3 }).withMessage('El nombre debe contener al menos tres caracteres'),

    body('image')
        .notEmpty().withMessage('La URL de la imagen es obligatoria')
        .isURL().withMessage('La URL de la imagen debe ser válida'),

    body('date')
        .notEmpty().withMessage('Debes introducir una fecha')
        .isISO8601().withMessage('La fecha debe estar en formato ISO8601'),

    body('author')
        .notEmpty().withMessage('El author es requerido')
        .isLength({ min: 3 }).withMessage('El author debe tener mínimo tres caracteres'),

    body('stream')
        .notEmpty().withMessage('El campo stream es requerido')
        .isLength({ min: 3 }).withMessage('El campo stream debe contener al menos tres caracteres'),

    body('description')
        .notEmpty().withMessage('La descripción es obligatoria')
        .isLength({ max: 300 }).withMessage('La descripción no debe tener más de 300 caracteres'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.error("Validation Errors:", errors.array()); // Log de errores
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// =========================================
// Validaciones para obtener todos los memes
// =========================================
export const validateGetAllMemes = (req, res, next) => {
    // No se requieren validaciones para obtener todos los memes
    next();
};


// ========================================
// Validaciones para obtener un meme por ID
// ========================================
export const validateGetOneMemes = [
    param('id')
    .notEmpty().withMessage('El ID del meme es obligatorio'),
    

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.error("Validation errors:", errors.array());
            return res.status(400).json({errors: errors.array()});
            
        } else {
            next();
        }

    }

];

// ==================================
// Validaciones para edición de memes
// ==================================
export const validateUpdateMeme = [
    
    
    body('name')
    .optional()
    .isLength({min: 3}).withMessage('El nombre debe contener al menos tres caracteres'),

    body('image')
    .optional()
    .isURL().withMessage('La URL de la imagen debe ser válida'),

    body('date')
    .optional()
    .isISO8601().withMessage('La fecha debe estar en formato ISO8601'),

    body('author')
    .optional()
    .isLength({min: 3}).withMessage('El autor debe tener mínimo tres caracteres'),

    body('stream')
    .optional()
    .isLength({min: 3}).withMessage('El campo stream debe contener mínimo tres caracteres'),

    body('description')
    .optional()
    .isLength({max: 300}).withMessage('La descripción no debe contener más de 300 caracteres'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.error("Validation Errors:", errors.array());
            return res.status(400).json({errors: errors.array()});
            
        } else {
            next();
            
        }
    }
];




