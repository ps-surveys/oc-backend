export class Query {
    // Querys for acs_user
    static SELECT_USERS: string = 'SELECT * FROM acs_user ORDER BY id_user DESC';
    static SELECT_USER_BY_EMAIL: string = 'SELECT * FROM acs_user where email_user = $1 ';
    static SELECT_USER_BY_ID: string = 'SELECT * FROM acs_user where id_user = $1 ';
    static SELECT_USER_BY_ID_COMP: string = 'SELECT * FROM acs_user where id_comp = $1 ORDER BY id_user DESC ';
    static INSERT_USER: string = 'INSERT INTO acs_user (id_prof, id_comp, ident_user, name_user, lastname_user, email_user, pass_user, rh_user, gender_user, date_birth_user, entailment_date_user) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
    static DELETE_USER: string = 'DELETE FROM acs_user WHERE id_user = $1 ';
    static UPDATE_USER: string = 'UPDATE acs_user SET id_prof= $1, id_comp=$2, ident_user=$3, name_user=$4, lastname_user=$5, email_user=$6, pass_user=$7, rh_user=$8, gender_user=$9, date_birth_user=$10, entailment_date_user=$11 WHERE id_user=$12;';
    static UPDATE_USER_NCP: string = 'UPDATE acs_user SET id_prof= $1, id_comp=$2, ident_user=$3, name_user=$4, lastname_user=$5, email_user=$6, rh_user=$7, gender_user=$8, date_birth_user=$9, entailment_date_user=$10 WHERE id_user=$11;';
    // static UPDATE_USER_INFO: string = 'UPDATE acs_user SET ident_user=$1, name_user=$2, lastname_user=$3, email_user=$4, rh_user=$5, gender_user=$6, date_birth_user=$7 WHERE id_user=$8;';
    static LOGIN: string = 'SELECT * FROM acs_user where email_user = $1 and pass_user = $2 ';

    // Querys for acs_company
    static SELECT_COMPANIES: string = 'SELECT * FROM acs_company ORDER BY id_comp DESC';
    static SELECT_COMPANY_BY_ID: string = 'SELECT * FROM acs_company where id_comp = $1';
    static INSERT_COMPANY: string = `INSERT INTO acs_company (name_comp, nit_comp, name_legal_rep, ident_legal_rep, email_comp, ciiu_comp, address_comp, phone_comp, number_employee, risk_level_comp, logo_comp, 
        arl_comp, flag_admin, main_economic_activity, sec_economic_activity, num_employee_dep, num_employee_indep, num_employee_cont ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)`;
    static SELECT_COMPANY_BY_NIT: string = 'SELECT * FROM acs_company where nit_comp = $1 ';
    static DELETE_COMPANY: string = 'DELETE FROM acs_company WHERE id_comp = $1 ';
    static UPDATE_COMPANY: string = `UPDATE acs_company SET name_comp=$1, nit_comp=$2, name_legal_rep=$3, ident_legal_rep=$4, email_comp=$5, ciiu_comp=$6, address_comp=$7, phone_comp=$8, 
    number_employee=$9, risk_level_comp=$10, logo_comp=$11, arl_comp=$12, flag_admin=$13, main_economic_activity=$15, sec_economic_activity=$16, num_employee_dep=$17, num_employee_indep=$18, num_employee_cont=$19  WHERE id_comp=$14;`;

    // Querys for acs_profile
    static SELECT_PROFILES: string = 'SELECT * FROM acs_profile ORDER BY id_prof DESC';
    static SELECT_PROFILE_BY_NAME: string = 'SELECT * FROM acs_profile where name_prof = $1';
    static INSERT_PROFILE: string = 'INSERT INTO acs_profile (name_prof) VALUES ($1)';
    static DELETE_PROFILE: string = 'DELETE FROM acs_profile WHERE id_prof = $1 ';
    static UPDATE_PROFILE: string = 'UPDATE acs_profile	SET name_prof=$1 WHERE id_prof=$2;';

    // Querys for act_format
    static SELECT_FORMATS: string = 'SELECT * FROM act_format ORDER BY id_format DESC';
    static SELECT_FORMAT_BY_NAME: string = 'SELECT * FROM act_format WHERE name_format = $1 AND cod_format = $2';
    static SELECT_FORMAT_BY_ID: string = 'SELECT * FROM act_format where id_format = $1';
    static SELECT_FORMAT_BY_ID_RF: string = 'SELECT * FROM act_format f INNER JOIN ar_register_format rf ON f.id_format = rf.id_format where f.id_format = $1';
    static INSERT_FORMAT: string = 'INSERT INTO act_format (id_user, name_format, desc_format, type_format, cod_format, issue_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    static DELETE_FORMAT: string = 'DELETE FROM act_format WHERE id_format = $1 ';
    static UPDATE_FORMAT: string = 'UPDATE act_format SET id_user=$1, name_format=$2, desc_format=$3, type_format=$4, cod_format=$5, issue_date=$6 WHERE id_format=$7;';

    // Querys for acs_workplace
    static SELECT_WORKPLACES: string = 'SELECT * FROM acs_workplace ORDER BY id_workplace DESC';
    static SELECT_WORKPLACES_BY_ID_COMP: string = 'SELECT * FROM acs_workplace where id_comp = $1 ORDER BY id_workplace DESC';
    static SELECT_WORKPLACE_BY_NAME: string = 'SELECT * FROM acs_workplace where name_workplace = $1 ';
    static INSERT_WORKPLACE: string = 'INSERT INTO acs_workplace (id_comp, name_workplace, address_workplace, phone_workplace, fixed, risk_level_workplace) VALUES ($1, $2, $3, $4, $5, $6)';
    static DELETE_WORKPLACE: string = 'DELETE FROM acs_workplace WHERE id_workplace = $1 ';
    static UPDATE_WORKPLACE: string = 'UPDATE acs_workplace SET id_comp=$1, name_workplace=$2, address_workplace=$3, phone_workplace=$4, fixed=$5, risk_level_workplace=$6 WHERE id_workplace=$7;';

    // Querys for act_section
    static SELECT_SECTIONS: string = 'SELECT * FROM act_section ORDER BY id_sec DESC';
    static SELECT_SECTIONS_BY_NAME: string = 'SELECT * FROM act_section where name_sec = $1';
    static SELECT_SECTION_BY_ID: string = 'SELECT * FROM act_section where id_sec = $1';
    static SELECT_SECTIONS_NOT_IN_FORM: string = 'SELECT * FROM act_section WHERE id_sec NOT IN (SELECT id_sec FROM act_format_section WHERE id_format = $1)';
    static INSERT_SECTION: string = 'INSERT INTO act_section (name_sec, desc_sec, type_sec, table_name, cycle) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    static DELETE_SECTION: string = 'DELETE FROM act_section WHERE id_sec = $1 ';
    static UPDATE_SECTION: string = 'UPDATE act_section SET name_sec=$1, desc_sec=$2, type_sec=$3, table_name=$4, cycle=$6 WHERE id_sec=$5;';
    static UPDATE_SECTION_TABLE: string = 'UPDATE act_section SET table_name=$1 WHERE id_sec=$2;';

    // Querys for act_option
    static SELECT_OPTIONS: string = 'SELECT * FROM act_option ORDER BY id_opt DESC';
    static SELECT_OPTION_BY_NAME: string = 'SELECT * FROM act_option where name_opt = $1 ';
    static INSERT_OPTION: string = 'INSERT INTO act_option (name_opt, des_opt, cod_opt) VALUES ($1, $2, $3) RETURNING *';
    static DELETE_OPTION: string = 'DELETE FROM act_option WHERE id_opt = $1 ';
    static UPDATE_OPTION: string = 'UPDATE act_option SET name_opt=$1, des_opt=$2, cod_opt=$3 WHERE id_opt=$4;';

    // Querys for act_opt_value
    static SELECT_OPTION_VALUES: string = 'SELECT * FROM act_opt_value ORDER BY id_opt_value DESC';
    static SELECT_OPTION_VALUE_BY_ID_OPT_NAME: string = 'SELECT * FROM act_opt_value where id_opt = $1 AND name_opt_value = $2';
    static SELECT_OPTION_VALUE_BY_ID_OPT: string = 'SELECT * FROM act_opt_value where id_opt = $1 ';
    static SELECT_OPTION_VALUE_BY_ID_OPT_ASSETS: string = 'SELECT * FROM act_opt_value where id_opt = $1 AND state_opt_value = true ';
    static SELECT_OPTION_VALUE_BY_ID_OPT_VAL: string = 'SELECT * FROM act_opt_value where id_opt_value = $1 ';
    static INSERT_OPTION_VALUE: string = 'INSERT INTO act_opt_value (id_opt, name_opt_value, cod_opt_value, state_opt_value) VALUES ($1, $2, $3, $4)';
    static DELETE_OPTION_VALUE: string = 'DELETE FROM act_opt_value WHERE id_opt_value = $1 ';
    static DELETE_OPTION_VALUE_BY_ID_OPT: string = 'DELETE FROM act_opt_value WHERE id_opt = $1 ';
    static UPDATE_OPTION_VALUE: string = 'UPDATE act_opt_value SET id_opt=$1, name_opt_value=$2, cod_opt_value=$3, state_opt_value=$4 WHERE id_opt_value=$5;';

    // Querys for act_ques
    static SELECT_QUESTIONS: string = 'SELECT * FROM act_ques ORDER BY id_ques DESC';
    static SELECT_QUESTION_BY_ID_SEC_NAME: string = 'SELECT * FROM act_ques where id_sec = $1 AND name_ques = $2';
    static SELECT_QUESTION_BY_ORDER_QUEST: string = 'SELECT * FROM act_ques where id_sec = $1 AND order_ques = $2';
    static SELECT_QUESTION_BY_ID: string = 'SELECT * FROM act_ques as aq INNER JOIN act_section as asn ON (aq.id_sec = asn.id_sec) where id_ques = $1';
    static SELECT_QUESTIONS_BY_ID_SEC: string = 'SELECT * FROM act_ques where id_sec = $1 ORDER BY id_ques ASC';
    static SELECT_QUESTIONS_BY_ID_SEC_FILL: string = 'SELECT * FROM act_ques WHERE id_sec = $1 AND id_ques IN (SELECT id_ques FROM act_version_ques WHERE id_version = $2) ORDER BY id_ques ASC';
    static SELECT_QUESTIONS_BY_ORDER_QUES: string = 'SELECT * FROM act_ques WHERE id_sec = $1 AND id_ques IN (SELECT id_ques FROM act_version_ques WHERE id_version = $2) ORDER BY order_ques ASC';
    static SELECT_QUESTIONS_BY_ID_SEC_NOT_IN: string = 'SELECT * FROM act_ques where id_sec = $1 AND type_ques NOT IN ($2, $3, $4, $5)';
    static INSERT_QUESTION: string = 'INSERT INTO act_ques (id_sec, id_opt, name_ques, desc_ques, type_ques, info_ques, mandatory_ques, item_value, order_ques) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
    static DELETE_QUESTION: string = 'DELETE FROM act_ques WHERE id_ques = $1 ';
    static UPDATE_QUESTION: string = 'UPDATE act_ques SET id_sec=$1, id_opt=$2, name_ques=$3, desc_ques=$4, type_ques=$5, info_ques=$6, mandatory_ques=$7, item_value=$9, order_ques=$10 WHERE id_ques=$8;';

    // Querys for act_condition
    static SELECT_CONDITIONS: string = 'SELECT * FROM act_condition ORDER BY id_cond DESC';
    static SELECT_CONDITIONS_BY_ID_QUES: string = 'SELECT * FROM act_condition where id_ques = $1 ';
    static INSERT_CONDITION: string = 'INSERT INTO act_condition (id_ques, type_cond, operator_cond, value_cond, message_cond) VALUES ($1, $2, $3, $4, $5)';
    static DELETE_CONDITION: string = 'DELETE FROM act_condition WHERE id_cond = $1 ';
    static UPDATE_CONDITION: string = 'UPDATE act_condition SET id_ques=$1, type_cond=$2, operator_cond=$3, value_cond=$4, message_cond=$5 WHERE id_cond=$6;';

    // Querys for act_dependency
    static SELECT_DEPENDENCIES: string = 'SELECT * FROM act_dependency ORDER BY id_dep DESC';
    static SELECT_DEPENDENCY_BY_ID_QUES: string = 'SELECT ad.*, aq.* FROM act_dependency as ad INNER JOIN act_ques aq ON (ad.id_ques = aq.id_ques) where ad.id_ques2 = $1';
    static SELECT_DEPENDENCY_BY_ID_SEC: string = 'SELECT ad.*, aq.*, ad.id_sec as id_sec_dep FROM act_dependency as ad INNER JOIN act_ques aq ON (ad.id_ques = aq.id_ques) where ad.id_sec = $1';
    static INSERT_DEPENDENCY: string = 'INSERT INTO act_dependency (id_ques, id_sec, id_ques2, operator_dep, value_dep, or_dep) VALUES ($1, $2, $3, $4, $5, $6)';
    static DELETE_DEPENDENCY: string = 'DELETE FROM act_dependency WHERE id_dep = $1 ';
    static UPDATE_DEPENDENCY: string = 'UPDATE act_dependency SET id_ques=$1, id_sec=$2, id_ques2=$3, operator_dep=$4, value_dep=$5, or_dep=$6 WHERE id_dep=$7;';

    static querySelectQuestionDependency: string = 'SELECT qd.*, qc2.*, qd.id_ques as id_quesFather, qd.id_sec as id_secChild FROM act_dependency qd INNER JOIN act_ques qc ON qc.id_ques = qd.id_ques LEFT JOIN  act_ques qc2 ON qc2.id_ques = qd.id_ques2 WHERE qd.id_ques2 = $1 ORDER BY qd.id_ques ASC';
    // Querys for ar_register_format
    static SELECT_REG_FORMATS: string = 'SELECT * FROM ar_register_format ORDER BY id_rf DESC';
    static SELECT_REG_FORMAT_BY_ID_WPLACE: string = 'SELECT * FROM ar_register_format where id_workplace = $1';
    static INSERT_REG_FORMAT: string = 'INSERT INTO ar_register_format (id_workplace, id_format, id_user, id_comp, id_version, init_date_rf, fin_date_rf) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    static DELETE_REG_FORMAT: string = 'DELETE FROM ar_register_format WHERE id_rf = $1 ';
    static UPDATE_REG_FORMAT: string = 'UPDATE ar_register_format SET id_workplace=$1, id_format=$2, id_user=$3, id_comp=$4, init_date_rf=$5, fin_date_rf=$6 WHERE id_rf=$7;';
    static SELECT_REPORTS_BY_CFVI: string = 'SELECT arf.*, ac.name_comp, au.name_user, au.lastname_user, aw.name_workplace FROM ar_register_format arf INNER JOIN acs_user au ON (arf.id_user = au.id_user) INNER JOIN acs_company ac ON (arf.id_comp = ac.id_comp) LEFT JOIN acs_workplace aw ON (arf.id_workplace = aw.id_workplace) WHERE arf.ID_COMP = $1 AND arf.ID_FORMAT = $2 AND arf.ID_VERSION = $3 AND arf.INIT_DATE_RF BETWEEN $4 AND $5';
    static SELECT_REPORTS_BY_CFVE: string = 'SELECT arf.*, ac.name_comp, au.name_user, au.lastname_user, aw.name_workplace FROM ar_register_format arf INNER JOIN acs_user au ON (arf.id_user = au.id_user) INNER JOIN acs_company ac ON (arf.id_comp = ac.id_comp) LEFT JOIN acs_workplace aw ON (arf.id_workplace = aw.id_workplace) WHERE arf.ID_COMP = $1 AND arf.ID_FORMAT = $2 AND arf.ID_VERSION = $3 AND arf.FIN_DATE_RF BETWEEN $4 AND $5';
    static SELECT_REPORTS_BY_CFVUI: string = 'SELECT arf.*, ac.name_comp, au.name_user, au.lastname_user, aw.name_workplace FROM ar_register_format arf INNER JOIN acs_user au ON (arf.id_user = au.id_user) INNER JOIN acs_company ac ON (arf.id_comp = ac.id_comp) LEFT JOIN acs_workplace aw ON (arf.id_workplace = aw.id_workplace) WHERE arf.ID_COMP = $1 AND arf.ID_FORMAT = $2 AND arf.ID_VERSION = $3 AND arf.ID_USER = $4 AND arf.INIT_DATE_RF BETWEEN $5 AND $6';
    static SELECT_REPORTS_BY_CFVUE: string = 'SELECT arf.*, ac.name_comp, au.name_user, au.lastname_user, aw.name_workplace FROM ar_register_format arf INNER JOIN acs_user au ON (arf.id_user = au.id_user) INNER JOIN acs_company ac ON (arf.id_comp = ac.id_comp) LEFT JOIN acs_workplace aw ON (arf.id_workplace = aw.id_workplace) WHERE arf.ID_COMP = $1 AND arf.ID_FORMAT = $2 AND arf.ID_VERSION = $3 AND arf.ID_USER = $4 AND arf.FIN_DATE_RF BETWEEN $5 AND $6';
    static SELECT_REPORTS_BY_CFVWI: string = 'SELECT arf.*, ac.name_comp, au.name_user, au.lastname_user, aw.name_workplace FROM ar_register_format arf INNER JOIN acs_user au ON (arf.id_user = au.id_user) INNER JOIN acs_company ac ON (arf.id_comp = ac.id_comp) LEFT JOIN acs_workplace aw ON (arf.id_workplace = aw.id_workplace) WHERE arf.ID_COMP = $1 AND arf.ID_FORMAT = $2 AND arf.ID_VERSION = $3 AND arf.ID_WORKPLACE = $4 AND arf.INIT_DATE_RF BETWEEN $5 AND $6';
    static SELECT_REPORTS_BY_CFVWE: string = 'SELECT arf.*, ac.name_comp, au.name_user, au.lastname_user, aw.name_workplace FROM ar_register_format arf INNER JOIN acs_user au ON (arf.id_user = au.id_user) INNER JOIN acs_company ac ON (arf.id_comp = ac.id_comp) LEFT JOIN acs_workplace aw ON (arf.id_workplace = aw.id_workplace) WHERE arf.ID_COMP = $1 AND arf.ID_FORMAT = $2 AND arf.ID_VERSION = $3 AND arf.ID_WORKPLACE = $4 AND arf.FIN_DATE_RF BETWEEN $5 AND $6';
    static SELECT_REPORTS_BY_CFVUWI: string = 'SELECT arf.*, ac.name_comp, au.name_user, au.lastname_user, aw.name_workplace FROM ar_register_format arf INNER JOIN acs_user au ON (arf.id_user = au.id_user) INNER JOIN acs_company ac ON (arf.id_comp = ac.id_comp) LEFT JOIN acs_workplace aw ON (arf.id_workplace = aw.id_workplace) WHERE arf.ID_COMP = $1 AND arf.ID_FORMAT = $2 AND arf.ID_VERSION = $3 AND arf.ID_USER = $4 AND arf.ID_WORKPLACE = $5 AND arf.INIT_DATE_RF BETWEEN $6 AND $7';
    static SELECT_REPORTS_BY_CFVUWE: string = 'SELECT arf.*, ac.name_comp, au.name_user, au.lastname_user, aw.name_workplace FROM ar_register_format arf INNER JOIN acs_user au ON (arf.id_user = au.id_user) INNER JOIN acs_company ac ON (arf.id_comp = ac.id_comp) LEFT JOIN acs_workplace aw ON (arf.id_workplace = aw.id_workplace) WHERE arf.ID_COMP = $1 AND arf.ID_FORMAT = $2 AND arf.ID_VERSION = $3 AND arf.ID_USER = $4 AND arf.ID_WORKPLACE = $5 AND arf.FIN_DATE_RF BETWEEN $6 AND $7';

    // Querys for acs_permission
    static SELECT_PERMISSIONS: string = 'SELECT * FROM acs_permission ORDER BY id_permis DESC';
    static SELECT_PERMISSION_BY_NAME: string = 'SELECT * FROM acs_permission where name_permis = $1';
    static INSERT_PERMISSION: string = 'INSERT INTO acs_permission (name_permis, des_permis) VALUES ($1, $2)';
    static DELETE_PERMISSION: string = 'DELETE FROM acs_permission WHERE id_permis = $1 ';
    static UPDATE_PERMISSION: string = 'UPDATE acs_permission SET name_permis=$1, des_permis=$2 WHERE id_permis=$3;';

    // Querys for acts_company_format
    static SELECT_COMP_FORMATS: string = 'SELECT * FROM acts_company_format ORDER BY id_cf DESC';
    static SELECT_COMP_FORMAT_BY_ID_COMP: string = 'SELECT * FROM acts_company_format as acf INNER JOIN act_format as af ON (acf.id_format = af.id_format) where id_comp = $1 and af.type_format != $2';
    static SELECT_COMP_FORMAT_BY_ID_COMP_BIO: string = 'SELECT * FROM acts_company_format as acf INNER JOIN act_format as af ON (acf.id_format = af.id_format) where id_comp = $1 and af.type_format = $2';
    static SELECT_COMP_FORMAT_BY_ID_FORM: string = 'SELECT * FROM acts_company_format where id_format = $1';
    static SELECT_COMP_FORMAT_BY_ID: string = 'SELECT * FROM acts_company_format WHERE id_cf = $1 ';
    static INSERT_COMP_FORMAT: string = 'INSERT INTO acts_company_format (id_comp, id_format, state_comp_for) VALUES ($1, $2, $3)';
    static DELETE_COMP_FORMAT: string = 'DELETE FROM acts_company_format WHERE id_cf = $1 ';
    static DELETE_COMP_FORMAT_BY_ID_FORM: string = 'DELETE FROM acts_company_format WHERE id_format = $1 ';
    static UPDATE_COMP_FORMAT: string = 'UPDATE acts_company_format SET id_comp=$1, id_format=$2, state_comp_for=$3 WHERE id_cf=$4;';

    // Querys for act_format_section
    static SELECT_FORM_SECTIONS: string = 'SELECT * FROM act_format_section ORDER BY id_fs DESC';
    static SELECT_FORM_SECTIONS_BY_ID_FORM: string = 'SELECT afsn.*, asn.* FROM act_format_section as afsn INNER JOIN act_section as asn ON (afsn.id_sec = asn.id_sec) WHERE afsn. id_format = $1 ORDER BY afsn.order_fs ASC';
    static SELECT_FORM_SECTIONS_BY_ID_FORM_FILL: string = 'SELECT afsn.*, asn.* FROM act_format_section as afsn INNER JOIN act_section as asn ON (afsn.id_sec = asn.id_sec) WHERE afsn.id_format = $1 AND afsn.state_fs = true AND afsn.id_sec IN (SELECT id_sec FROM act_version_section WHERE id_version = $2) ORDER BY afsn.order_fs ASC';
    static SELECT_FORM_SECTIONS_BY_FORM_ORDER: string = 'SELECT * FROM act_format_section WHERE id_format = $1 AND order_fs = $2';
    static INSERT_FORM_SECTION: string = 'INSERT INTO act_format_section (id_sec, id_format, state_fs, order_fs) VALUES ($1, $2, $3, $4)';
    static DELETE_FORM_SECTION: string = 'DELETE FROM act_format_section WHERE id_fs = $1 ';
    static UPDATE_FORM_SECTION: string = 'UPDATE act_format_section SET id_sec=$1, id_format=$2, state_fs=$3, order_fs=$4 WHERE id_fs=$5;';

    // Querys for acs_permis_rol
    static SELECT_PERMISSIONS_ROL: string = 'SELECT * FROM acs_permis_rol ORDER BY id_permis_rol DESC';
    static SELECT_PERMISSION_ROL_BY_ID_PROF: string = 'SELECT * FROM acs_permis_rol as apr INNER JOIN acs_permission as ap ON (apr.id_permis = ap.id_permis) where id_prof = $1';
    static SELECT_PERMISSION_ROL_BY_ID_PROF_PERMIS: string = 'SELECT * FROM acs_permis_rol where id_prof = $1 AND id_permis = $2';
    static INSERT_PERMISSION_ROL: string = 'INSERT INTO acs_permis_rol (id_prof, id_permis) VALUES ($1, $2)';
    static DELETE_PERMISSION_ROL: string = 'DELETE FROM acs_permis_rol WHERE id_permis_rol = $1';
    static DELETE_PERMISSION_ROL_BY_ID_PROF: string = 'DELETE FROM acs_permis_rol WHERE id_prof = $1';
    static UPDATE_PERMISSION_ROL: string = 'UPDATE acs_permis_rol SET id_prof=$1, id_permis=$2 WHERE id_permis_rol=$3;';

    // Querys for act_version
    static SELECT_VERSIONS_BY_ID_FORM: string = 'SELECT av.*, af.* FROM act_version as av INNER JOIN act_format af ON (av.id_format = af.id_format) WHERE av.id_format = $1 ORDER BY av.date_created DESC';
    static SELECT_VERSION_BY_ID_FORM_COD_VER: string = 'SELECT * FROM act_version WHERE id_format = $1 AND cod_version = $2 AND version = $3'
    static SELECT_VERSION_BY_ID_FORM_COD_VER_WHEN_UPDATE: string = 'SELECT * FROM act_version WHERE id_format = $1 AND cod_version = $2 AND version = $3 and id_version <> $4'
    static SELECT_VERSION_BY_ID: string = 'SELECT * FROM act_version WHERE id_version = $1'
    static INSERT_VERSION: string = 'INSERT INTO act_version (id_format, date_created, cod_version, state_ver, version) VALUES ($1, $2, $3, $4, $5)';
    static DELETE_VERSION: string = 'DELETE FROM act_version WHERE id_version = $1 ';
    static UPDATE_VERSION: string = 'UPDATE act_version SET id_format=$1, date_created=$2, cod_version=$3, state_ver=$4, version=$5 WHERE id_version=$6;';

    // Querys for act_version_section
    static SELECT_VER_SECTIONS_BY_ID_VER: string = 'SELECT * FROM act_version_section WHERE id_version = $1 ORDER BY id_ver_sec ASC';
    static SELECT_VER_SECTIONS_INFO_BY_ID_VER: string = 'SELECT * FROM act_version_section vs INNER JOIN act_section sec ON sec.id_sec = vs.id_sec INNER JOIN act_format_section fs ON vs.id_sec = fs.id_sec WHERE vs.id_version = $1 ORDER BY fs.order_fs ASC';
    // static SELECT_VER_SECTIONS_INFO_BY_ID_VER: string = 'SELECT * FROM act_version_section vs INNER JOIN act_section sec ON sec.id_sec = vs.id_sec INNER JOIN act_format_section fs ON vs.id_sec = fs.id_sec WHERE vs.id_version = $1 AND fs.state_fs = true ORDER BY fs.order_fs ASC';
    // static SELECT_SECTIONS_NO_VER: string = 'select * from act_section se where id_sec not in (SELECT vs.id_Sec FROM act_version_section vs WHERE vs.id_version = $1)';
    static SELECT_SECTIONS_NO_VER: string = 'SELECT * FROM act_section se WHERE id_sec NOT IN (SELECT vs.id_Sec FROM act_version_section vs WHERE vs.id_version = $1) AND id_sec IN (SELECT afs.id_sec FROM act_format_section as afs INNER JOIN act_version as av ON (afs.id_format = av.id_format) WHERE afs.id_format = $2)';
    static INSERT_VER_SECTION: string = 'INSERT INTO act_version_section (id_version, id_sec) VALUES ($1, $2)';
    static DELETE_VER_SECTION: string = 'DELETE FROM act_version_section WHERE id_ver_sec = $1';

    // Querys for act_version_section
    static SELECT_VER_QUESTIONS_BY_ID_VER: string = 'SELECT * FROM act_version_ques WHERE id_version = $1 ORDER BY id_ver_sec ASC';
    static INSERT_VER_QUESTION: string = 'INSERT INTO act_version_ques (id_version, id_ques) VALUES ($1, $2)';
    static DELETE_VER_QUESTION: string = 'DELETE FROM act_version_ques WHERE id_ver_ques = $1';
    static SELECT_VER_QUESTION_INFO_BY_ID_VER: string = 'select * from act_ques que inner join act_version_ques vq ON vq.id_ques = que.id_ques inner join act_section sec ON sec.id_sec = que.id_sec where vq.id_version = $1 order by que.name_ques ASC';
    // static SELECT_VER_QUESTION_INFO_BY_ID_VER: string = 'SELECT * from act_ques que INNER JOIN act_version_ques vq ON vq.id_ques = que.id_ques INNER JOIN act_section sec ON sec.id_sec = que.id_sec INNER JOIN act_format_section fs ON sec.id_sec = fs.id_sec WHERE vq.id_version = $1 AND fs.state_fs = true ORDER BY que.order_ques ASC';
    static SELECT_QUESTIONS_NO_VER: string = 'select * from act_ques que where id_sec = $1 and id_ques not in (SELECT vs.id_ques FROM act_version_ques vs WHERE vs.id_version = $2)';

    // Querys to collaborators table
    static INSERT_COLLABORATOR: string = 'INSERT INTO acs_collaborator (id_comp, identification_col, doc_type_col, name_col, lastname_col, birthday_col, area, position, rh_col, gender_col, special_con_col, other_col, eps, afp, arl, severance_pay, compensation_box) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *';
    static SELECT_COL_BY_ID: string = 'SELECT * FROM acs_collaborator where id_col = $1';
    static SELECT_COL_BY_IDENT_COMP: string = 'SELECT * FROM acs_collaborator where identification_col = $1 and id_comp = $2';
    static SELECT_COL_BY_ID_COMP: string = 'SELECT * FROM acs_collaborator where id_comp = $1';
    static UPDATE_COL: string = 'UPDATE acs_collaborator SET id_comp=$1, identification_col=$2, doc_type_col=$3, name_col=$4, lastname_col=$5, birthday_col=$6, area=$7, position=$8, rh_col=$9, gender_col=$10, special_con_col=$11, other_col=$12, eps=$13, afp= $14 , arl= $15, severance_pay= $16, compensation_box= $17 WHERE id_col=$18;';
    static DELETE_COL: string = 'DELETE FROM acs_collaborator WHERE id_col = $1 ';

    static INSERT_FORMAT_HEALTH: string = 'INSERT INTO acs_health_format (id_comp, identification_col, temperature, state_health, init_date, final_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    static SELECT_ALL_HEALTHS: string = 'SELECT * FROM acs_health_format hf INNER JOIN acs_collaborator ac ON hf.identification_col = ac.identification_col';
    static SELECT_ALL_HEALTHS_BY_COMP: string = 'SELECT * FROM acs_health_format hf INNER JOIN acs_collaborator ac ON hf.identification_col = ac.identification_col where hf.id_comp = $1';
    static SELECT_BASIC_BIO_DATA_FOR_REPORT: string = `SELECT * FROM ar_register_format rf INNER JOIN acs_company ac ON rf.id_comp = ac.id_comp INNER JOIN acs_user au ON rf.id_user = au.id_user 
    INNER JOIN acs_workplace aw ON rf.id_workplace = aw.id_workplace  where rf.id_rf = $1`;
    static SELECT_SECTION_BIO_DATA_FOR_REPORT: string = `SELECT * FROM ar_register_format rf INNER JOIN act_version_section vs ON rf.id_version = vs.id_version
     INNER JOIN act_section ats ON vs.id_sec = ats.id_sec INNER JOIN act_format_section afs ON ats.id_sec = afs.id_sec where rf.id_rf = $1 ORDER BY afs.order_fs ASC`

    //  INNER JOIN act_ques aq ON ats.id_sec = aq.id_sec
    //  static SELECT_RESPONSE_QUES: string = `SELECT * FROM $1`
    // INNER JOIN act_format_section fs ON rf.id_format = fs.id_format
    // 
}