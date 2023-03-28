# Mejora del control de acceso en AWS
## AWS IAM vs AWS Organizations
AWS Identity and Access Management (IAM) y AWS Organizations son dos servicios de AWS que se utilizan para controlar el acceso a los recursos de AWS, pero tienen diferentes funcionalidades y enfoques.

1. **[AWS IAM](https://docs.aws.amazon.com/es_es/IAM/latest/UserGuide/introduction.html)**: AWS Identity and Access Management (IAM) es un servicio que permite administrar el acceso a los recursos de AWS. IAM permite crear y gestionar usuarios, grupos y roles de AWS, y definir políticas de seguridad que especifican los permisos necesarios para acceder a los recursos.
    
2.  **[AWS Organizations](https://docs.aws.amazon.com/es_es/controltower/latest/userguide/organizations.html)**: AWS Organizations es un servicio que permite administrar varias cuentas de AWS de forma centralizada. Con AWS Organizations, se pueden aplicar políticas de seguridad en varias cuentas de AWS, lo que facilita la gestión de la seguridad en grandes organizaciones

En resumen, **IAM** se centra en la gestión del acceso a los recursos de AWS en una sola cuenta, mientras que **AWS Organizations** se centra en la gestión y consolidación de varias cuentas de AWS en una sola organización.

### AWS Organizations en Enxenio
Existen dos cuentas de AWS Organizations en Enxenio. Por un lado tenemos a **cigesoc** y por otro a **Enxenio S.L.**, la cual es la cuenta de administración.

## Roles AWS
Los **roles de AWS** son una forma de otorgar permisos a los usuarios y servicios de AWS para acceder a los recursos. Los roles de AWS se pueden usar para acceder a los recursos de AWS en diferentes cuentas, lo que permite el acceso a recursos compartidos. A continuación, se detallan algunos de los tipos de roles disponibles en AWS:

1.  **AWS managed roles**: estos son roles predefinidos por AWS que se utilizan comúnmente para delegar permisos a servicios específicos de AWS, como EC2, Lambda y S3. Los roles administrados por AWS ya tienen políticas de permisos integradas y se actualizan automáticamente para garantizar la compatibilidad con los servicios de AWS.