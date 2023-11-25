export class Query {
    // Querys for company_user
    static SELECT_USERS: string = 'SELECT * FROM company_user ORDER BY id_user DESC';
    static SELECT_USER_BY_EMAIL: string = 'SELECT * FROM company_user where email_user = $1 ';
    static SELECT_USER_BY_ID: string = 'SELECT * FROM company_user where id_user = $1 ';
    static SELECT_USER_BY_ID_COMP: string = 'SELECT * FROM company_user where id_comp = $1 ORDER BY id_user DESC ';
    static INSERT_USER: string = 'INSERT INTO company_user (id_role, id_comp, ident_user, name_user, lastname_user, email_user, pass_user, gender_user, date_birth_user, entailment_date_user) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
    static DELETE_USER: string = 'DELETE FROM company_user WHERE id_user = $1 ';
    static UPDATE_USER: string = 'UPDATE company_user SET id_role= $1, id_comp=$2, ident_user=$3, name_user=$4, lastname_user=$5, email_user=$6, pass_user=$7, gender_user=$8, date_birth_user=$9, entailment_date_user=$10 WHERE id_user=$11;';
    static UPDATE_USER_NCP: string = 'UPDATE company_user SET id_role= $1, id_comp=$2, ident_user=$3, name_user=$4, lastname_user=$5, email_user=$6, gender_user=$7, date_birth_user=$8, entailment_date_user=$9 WHERE id_user=$10;';
    // static UPDATE_USER_INFO: string = 'UPDATE company_user SET ident_user=$1, name_user=$2, lastname_user=$3, email_user=$4, rh_user=$5, gender_user=$6, date_birth_user=$7 WHERE id_user=$8;';
    static LOGIN: string = 'SELECT * FROM company_user WHERE email_user = $1 and pass_user = $2 ';

    // Querys for company
    static SELECT_COMPANIES: string = 'SELECT * FROM company ORDER BY id_comp DESC';
    static SELECT_COMPANY_BY_ID: string = 'SELECT * FROM company where id_comp = $1';
    static INSERT_COMPANY: string = `INSERT INTO company (name_comp, nit_comp, name_legal_rep, ident_legal_rep, email_comp, address_comp, phone_comp, number_employee, logo_comp,
        flag_admin ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;
    static SELECT_COMPANY_BY_NIT: string = "SELECT * FROM company where nit_comp = $1 ";
    static DELETE_COMPANY: string = "DELETE FROM company WHERE id_comp = $1 ";
    static UPDATE_COMPANY: string = `UPDATE company SET name_comp=$1, nit_comp=$2, name_legal_rep=$3, ident_legal_rep=$4, email_comp=$5, address_comp=$6, phone_comp=$7, 
    number_employee=$8, logo_comp=$9, flag_admin=$10 WHERE id_comp=$11;`;

    // Querys for role
    static SELECT_PROFILES: string = "SELECT * FROM role ORDER BY id_role DESC";
    static SELECT_PROFILE_BY_NAME: string = "SELECT * FROM role where name_role = $1";
    static INSERT_PROFILE: string = "INSERT INTO role (name_role) VALUES ($1)";
    static DELETE_PROFILE: string = "DELETE FROM role WHERE id_role = $1 ";
    static UPDATE_PROFILE: string = "UPDATE role	SET name_role=$1 WHERE id_role=$2;";

    // Querys for survey
    static SELECT_FORMATS: string = 'SELECT * FROM survey ORDER BY id_survey DESC';
    static SELECT_FORMAT_BY_NAME: string = 'SELECT * FROM survey WHERE name_format = $1 AND cod_format = $2';
    static SELECT_FORMAT_BY_ID: string = 'SELECT * FROM survey where id_survey = $1';
    static SELECT_FORMAT_BY_ID_RF: string = 'SELECT * FROM survey f INNER JOIN survey_answered rf ON f.id_survey = rf.id_survey where f.id_survey = $1';
    static INSERT_FORMAT: string = 'INSERT INTO survey (id_user, name_format, desc_format, type_format, cod_format, issue_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    static DELETE_FORMAT: string = 'DELETE FROM survey WHERE id_survey = $1 ';
    static UPDATE_FORMAT: string = 'UPDATE survey SET id_user=$1, name_format=$2, desc_format=$3, type_format=$4, cod_format=$5, issue_date=$6 WHERE id_survey=$7;';

    // Querys for work_area
    static SELECT_WORKAREAS: string = 'SELECT * FROM work_area ORDER BY id_work_area DESC';
    static SELECT_WORKAREAS_BY_ID_COMP: string = 'SELECT * FROM work_area where id_comp = $1 ORDER BY id_work_area DESC';
    static SELECT_WORKAREA_BY_NAME: string = 'SELECT * FROM work_area where area_name = $1 ';
    static INSERT_WORKAREA: string = 'INSERT INTO work_area (id_comp, area_name) VALUES ($1, $2)';
    static DELETE_WORKAREA: string = 'DELETE FROM work_area WHERE id_work_area = $1 ';
    static UPDATE_WORKAREA: string = 'UPDATE work_area SET id_comp=$1, area_name=$2 WHERE id_work_area=$3;';

    // Querys for all_section
    static SELECT_SECTIONS: string = "SELECT * FROM all_section ORDER BY id_sec DESC";
    static SELECT_SECTIONS_BY_NAME: string = "SELECT * FROM all_section where name_sec = $1";
    static SELECT_SECTION_BY_ID: string = "SELECT * FROM all_section where id_sec = $1";
    static SELECT_SECTIONS_NOT_IN_FORM: string = "SELECT * FROM all_section WHERE id_sec NOT IN (SELECT id_sec FROM survey_section WHERE id_survey = $1)";
    static INSERT_SECTION: string = "INSERT INTO all_section (name_sec, desc_sec, type_sec, table_name) VALUES ($1, $2, $3, $4) RETURNING *";
    static DELETE_SECTION: string = "DELETE FROM all_section WHERE id_sec = $1 ";
    static UPDATE_SECTION: string = "UPDATE all_section SET name_sec=$1, desc_sec=$2, type_sec=$3, table_name=$4 WHERE id_sec=$5;";
    static UPDATE_SECTION_TABLE: string = "UPDATE all_section SET table_name=$1 WHERE id_sec=$2;";

    // Querys for option
    static SELECT_OPTIONS: string = "SELECT * FROM option ORDER BY id_opt DESC";
    static SELECT_OPTION_BY_NAME: string = "SELECT * FROM option where name_opt = $1 ";
    static INSERT_OPTION: string = "INSERT INTO option (name_opt, des_opt, cod_opt) VALUES ($1, $2, $3) RETURNING *";
    static DELETE_OPTION: string = "DELETE FROM option WHERE id_opt = $1 ";
    static UPDATE_OPTION: string = "UPDATE option SET name_opt=$1, des_opt=$2, cod_opt=$3 WHERE id_opt=$4;";

    // Querys for opt_value
    static SELECT_OPTION_VALUES: string = "SELECT * FROM opt_value ORDER BY id_opt_value DESC";
    static SELECT_OPTION_VALUE_BY_ID_OPT_NAME: string = "SELECT * FROM opt_value where id_opt = $1 AND name_opt_value = $2";
    static SELECT_OPTION_VALUE_BY_ID_OPT: string = "SELECT * FROM opt_value where id_opt = $1 ";
    static SELECT_OPTION_VALUE_BY_ID_OPT_ASSETS: string = "SELECT * FROM opt_value where id_opt = $1 AND state_opt_value = true ";
    static SELECT_OPTION_VALUE_BY_ID_OPT_VAL: string = "SELECT * FROM opt_value where id_opt_value = $1 ";
    static INSERT_OPTION_VALUE: string = "INSERT INTO opt_value (id_opt, name_opt_value, cod_opt_value, state_opt_value) VALUES ($1, $2, $3, $4)";
    static DELETE_OPTION_VALUE: string = "DELETE FROM opt_value WHERE id_opt_value = $1 ";
    static DELETE_OPTION_VALUE_BY_ID_OPT: string = "DELETE FROM opt_value WHERE id_opt = $1 ";
    static UPDATE_OPTION_VALUE: string = "UPDATE opt_value SET id_opt=$1, name_opt_value=$2, cod_opt_value=$3, state_opt_value=$4 WHERE id_opt_value=$5;";

    // Querys for question
    static SELECT_QUESTIONS: string = "SELECT * FROM question ORDER BY id_ques DESC";
    static SELECT_QUESTION_BY_ID_SEC_NAME: string = "SELECT * FROM question where id_sec = $1 AND name_ques = $2";
    static SELECT_QUESTION_BY_ORDER_QUEST: string = "SELECT * FROM question where id_sec = $1 AND order_ques = $2";
    static SELECT_QUESTION_BY_ID: string = "SELECT * FROM question as aq INNER JOIN survey_section as asn ON (aq.id_sec = asn.id_sec) where id_ques = $1";
    static SELECT_QUESTIONS_BY_ID_SEC: string = "SELECT * FROM question where id_sec = $1 ORDER BY id_ques ASC";
    static SELECT_QUESTIONS_BY_ID_SEC_FILL: string = "SELECT * FROM question WHERE id_sec = $1 AND id_ques IN (SELECT id_ques FROM version_ques WHERE id_version = $2) ORDER BY id_ques ASC";
    static SELECT_QUESTIONS_BY_ORDER_QUES: string = "SELECT * FROM question WHERE id_sec = $1 AND id_ques IN (SELECT id_ques FROM version_ques WHERE id_version = $2) ORDER BY order_ques ASC";
    static SELECT_QUESTIONS_BY_ID_SEC_NOT_IN: string = "SELECT * FROM question where id_sec = $1 AND type_ques NOT IN ($2, $3, $4, $5)";
    static INSERT_QUESTION: string = "INSERT INTO question (id_sec, id_opt, name_ques, desc_ques, type_ques, info_ques, mandatory_ques, item_value, order_ques) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *";
    static DELETE_QUESTION: string = "DELETE FROM question WHERE id_ques = $1 ";
    static UPDATE_QUESTION: string = "UPDATE question SET id_sec=$1, id_opt=$2, name_ques=$3, desc_ques=$4, type_ques=$5, info_ques=$6, mandatory_ques=$7, item_value=$9, order_ques=$10 WHERE id_ques=$8;";

    // Querys for condition
    static SELECT_CONDITIONS: string = "SELECT * FROM condition ORDER BY id_cond DESC";
    static SELECT_CONDITIONS_BY_ID_QUES: string = "SELECT * FROM condition where id_ques = $1 ";
    static INSERT_CONDITION: string = "INSERT INTO condition (id_ques, type_cond, operator_cond, value_cond, message_cond) VALUES ($1, $2, $3, $4, $5)";
    static DELETE_CONDITION: string = "DELETE FROM condition WHERE id_cond = $1 ";
    static UPDATE_CONDITION: string = "UPDATE condition SET id_ques=$1, type_cond=$2, operator_cond=$3, value_cond=$4, message_cond=$5 WHERE id_cond=$6;";

    // Querys for dependency
    static SELECT_DEPENDENCIES: string = 'SELECT * FROM dependency ORDER BY id_dep DESC';
    static SELECT_DEPENDENCY_BY_ID_QUES: string = 'SELECT ad.*, aq.* FROM dependency as ad INNER JOIN question aq ON (ad.id_ques = aq.id_ques) where ad.id_ques2 = $1';
    static SELECT_DEPENDENCY_BY_ID_SEC: string = 'SELECT ad.*, aq.*, ad.id_sec as id_sec_dep FROM dependency as ad INNER JOIN question aq ON (ad.id_ques = aq.id_ques) where ad.id_sec = $1';
    static INSERT_DEPENDENCY: string = 'INSERT INTO dependency (id_ques, id_sec, id_ques2, operator_dep, value_dep, or_dep) VALUES ($1, $2, $3, $4, $5, $6)';
    static DELETE_DEPENDENCY: string = 'DELETE FROM dependency WHERE id_dep = $1 ';
    static UPDATE_DEPENDENCY: string = 'UPDATE dependency SET id_ques=$1, id_sec=$2, id_ques2=$3, operator_dep=$4, value_dep=$5, or_dep=$6 WHERE id_dep=$7;';

    static querySelectQuestionDependency: string = 'SELECT qd.*, qc2.*, qd.id_ques as id_quesFather, qd.id_sec as id_secChild FROM dependency qd INNER JOIN question qc ON qc.id_ques = qd.id_ques LEFT JOIN  question qc2 ON qc2.id_ques = qd.id_ques2 WHERE qd.id_ques2 = $1 ORDER BY qd.id_ques ASC';
    // Querys for survey_answered
    static SELECT_REG_FORMATS: string = 'SELECT * FROM survey_answered ORDER BY id_sar DESC';
    static SELECT_REG_FORMAT_BY_ID_WPLACE: string = 'SELECT * FROM survey_answered where id_work_area = $1';
    static INSERT_REG_FORMAT: string = 'INSERT INTO survey_answered (id_work_area, id_survey, id_user, id_comp, id_sv, init_date_sa, fin_date_sa) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    static DELETE_REG_FORMAT: string = 'DELETE FROM survey_answered WHERE id_sar = $1 ';
    static UPDATE_REG_FORMAT: string = 'UPDATE survey_answered SET id_work_area=$1, id_survey=$2, id_user=$3, id_comp=$4, init_date_sa=$5, fin_date_sa=$6 WHERE id_sar=$7;';
    static SELECT_REPORTS_BY_CFVI: string = 'SELECT arf.*, ac.name_comp, au.name_user, au.lastname_user, aw.area_name FROM survey_answered arf INNER JOIN company_user au ON (arf.id_user = au.id_user) INNER JOIN company ac ON (arf.id_comp = ac.id_comp) LEFT JOIN work_area aw ON (arf.id_work_area = aw.id_work_area) WHERE arf.ID_COMP = $1 AND arf.ID_SURVEY = $2 AND arf.ID_SV = $3 AND arf.INIT_DATE_RF BETWEEN $4 AND $5';
    static SELECT_REPORTS_BY_CFVE: string = 'SELECT arf.*, ac.name_comp, au.name_user, au.lastname_user, aw.area_name FROM survey_answered arf INNER JOIN company_user au ON (arf.id_user = au.id_user) INNER JOIN company ac ON (arf.id_comp = ac.id_comp) LEFT JOIN work_area aw ON (arf.id_work_area = aw.id_work_area) WHERE arf.ID_COMP = $1 AND arf.ID_SURVEY = $2 AND arf.ID_SV = $3 AND arf.FIN_DATE_RF BETWEEN $4 AND $5';
    static SELECT_REPORTS_BY_CFVUI: string = 'SELECT arf.*, ac.name_comp, au.name_user, au.lastname_user, aw.area_name FROM survey_answered arf INNER JOIN company_user au ON (arf.id_user = au.id_user) INNER JOIN company ac ON (arf.id_comp = ac.id_comp) LEFT JOIN work_area aw ON (arf.id_work_area = aw.id_work_area) WHERE arf.ID_COMP = $1 AND arf.ID_SURVEY = $2 AND arf.ID_SV = $3 AND arf.ID_USER = $4 AND arf.INIT_DATE_RF BETWEEN $5 AND $6';
    static SELECT_REPORTS_BY_CFVUE: string = 'SELECT arf.*, ac.name_comp, au.name_user, au.lastname_user, aw.area_name FROM survey_answered arf INNER JOIN company_user au ON (arf.id_user = au.id_user) INNER JOIN company ac ON (arf.id_comp = ac.id_comp) LEFT JOIN work_area aw ON (arf.id_work_area = aw.id_work_area) WHERE arf.ID_COMP = $1 AND arf.ID_SURVEY = $2 AND arf.ID_SV = $3 AND arf.ID_USER = $4 AND arf.FIN_DATE_RF BETWEEN $5 AND $6';
    static SELECT_REPORTS_BY_CFVWI: string = 'SELECT arf.*, ac.name_comp, au.name_user, au.lastname_user, aw.area_name FROM survey_answered arf INNER JOIN company_user au ON (arf.id_user = au.id_user) INNER JOIN company ac ON (arf.id_comp = ac.id_comp) LEFT JOIN work_area aw ON (arf.id_work_area = aw.id_work_area) WHERE arf.ID_COMP = $1 AND arf.ID_SURVEY = $2 AND arf.ID_SV = $3 AND arf.ID_WORK_AREA = $4 AND arf.INIT_DATE_RF BETWEEN $5 AND $6';
    static SELECT_REPORTS_BY_CFVWE: string = 'SELECT arf.*, ac.name_comp, au.name_user, au.lastname_user, aw.area_name FROM survey_answered arf INNER JOIN company_user au ON (arf.id_user = au.id_user) INNER JOIN company ac ON (arf.id_comp = ac.id_comp) LEFT JOIN work_area aw ON (arf.id_work_area = aw.id_work_area) WHERE arf.ID_COMP = $1 AND arf.ID_SURVEY = $2 AND arf.ID_SV = $3 AND arf.ID_WORK_AREA = $4 AND arf.FIN_DATE_RF BETWEEN $5 AND $6';
    static SELECT_REPORTS_BY_CFVUWI: string = 'SELECT arf.*, ac.name_comp, au.name_user, au.lastname_user, aw.area_name FROM survey_answered arf INNER JOIN company_user au ON (arf.id_user = au.id_user) INNER JOIN company ac ON (arf.id_comp = ac.id_comp) LEFT JOIN work_area aw ON (arf.id_work_area = aw.id_work_area) WHERE arf.ID_COMP = $1 AND arf.ID_SURVEY = $2 AND arf.ID_SV = $3 AND arf.ID_USER = $4 AND arf.ID_WORK_AREA = $5 AND arf.INIT_DATE_RF BETWEEN $6 AND $7';
    static SELECT_REPORTS_BY_CFVUWE: string = 'SELECT arf.*, ac.name_comp, au.name_user, au.lastname_user, aw.area_name FROM survey_answered arf INNER JOIN company_user au ON (arf.id_user = au.id_user) INNER JOIN company ac ON (arf.id_comp = ac.id_comp) LEFT JOIN work_area aw ON (arf.id_work_area = aw.id_work_area) WHERE arf.ID_COMP = $1 AND arf.ID_SURVEY = $2 AND arf.ID_SV = $3 AND arf.ID_USER = $4 AND arf.ID_WORK_AREA = $5 AND arf.FIN_DATE_RF BETWEEN $6 AND $7';

    // Querys for permission
    static SELECT_PERMISSIONS: string = "SELECT * FROM permission ORDER BY id_permis DESC";
    static SELECT_PERMISSION_BY_NAME: string = "SELECT * FROM permission where name_permis = $1";
    static INSERT_PERMISSION: string = "INSERT INTO permission (name_permis, des_permis) VALUES ($1, $2)";
    static DELETE_PERMISSION: string = "DELETE FROM permission WHERE id_permis = $1 ";
    static UPDATE_PERMISSION: string = "UPDATE permission SET name_permis=$1, des_permis=$2 WHERE id_permis=$3;";

    // Querys for survey_assignment
    static SELECT_COMP_FORMATS: string = "SELECT * FROM survey_assignment ORDER BY id_sat DESC";
    static SELECT_COMP_FORMAT_BY_ID_COMP: string ="SELECT * FROM survey_assignment as acf INNER JOIN survey as af ON (acf.id_survey = af.id_survey) where id_comp = $1 and af.type_format != $2";
    static SELECT_COMP_FORMAT_BY_ID_COMP_BIO: string = "SELECT * FROM survey_assignment as acf INNER JOIN survey as af ON (acf.id_survey = af.id_survey) where id_comp = $1 and af.type_format = $2";
    static SELECT_COMP_FORMAT_BY_ID_FORM: string = "SELECT * FROM survey_assignment where id_survey = $1";
    static SELECT_COMP_FORMAT_BY_ID: string = "SELECT * FROM survey_assignment WHERE id_sat = $1 ";
    static INSERT_COMP_FORMAT: string = "INSERT INTO survey_assignment (id_comp, id_survey, state_comp_sur) VALUES ($1, $2, $3)";
    static DELETE_COMP_FORMAT: string = "DELETE FROM survey_assignment WHERE id_sat = $1 ";
    static DELETE_COMP_FORMAT_BY_ID_FORM: string = "DELETE FROM survey_assignment WHERE id_survey = $1 ";
    static UPDATE_COMP_FORMAT: string = "UPDATE survey_assignment SET id_comp=$1, id_survey=$2, state_comp_sur=$3 WHERE id_sat=$4;";

    // Querys for survey_section
    static SELECT_FORM_SECTIONS: string = "SELECT * FROM survey_section ORDER BY id_ss DESC";
    static SELECT_FORM_SECTIONS_BY_ID_FORM: string = "SELECT afsn.*, asn.* FROM survey_section as afsn INNER JOIN all_section as asn ON (afsn.id_sec = asn.id_sec) WHERE afsn. id_survey = $1 ORDER BY afsn.order_ss ASC";
    static SELECT_FORM_SECTIONS_BY_ID_FORM_FILL: string = "SELECT afsn.*, asn.* FROM survey_section as afsn INNER JOIN all_section as asn ON (afsn.id_sec = asn.id_sec) WHERE afsn.id_survey = $1 AND afsn.state_ss = true AND afsn.id_sec IN (SELECT id_sec FROM version_section WHERE id_version = $2) ORDER BY afsn.order_ss ASC";
    static SELECT_FORM_SECTIONS_BY_FORM_ORDER: string = "SELECT * FROM survey_section WHERE id_survey = $1 AND order_ss = $2";
    static INSERT_FORM_SECTION: string = "INSERT INTO survey_section (id_sec, id_survey, state_ss, order_ss) VALUES ($1, $2, $3, $4)";
    static DELETE_FORM_SECTION: string = "DELETE FROM survey_section WHERE id_ss = $1 ";
    static UPDATE_FORM_SECTION: string = "UPDATE survey_section SET id_sec=$1, id_survey=$2, state_ss=$3, order_ss=$4 WHERE id_ss=$5;";

    // Querys for permis_role
    static SELECT_PERMISSIONS_ROL: string = "SELECT * FROM permis_role ORDER BY id_permis_role DESC";
    static SELECT_PERMISSION_ROL_BY_ID_PROF: string = "SELECT * FROM permis_role as apr INNER JOIN permission as ap ON (apr.id_permis = ap.id_permis) where id_role = $1";
    static SELECT_PERMISSION_ROL_BY_ID_PROF_PERMIS: string = "SELECT * FROM permis_role where id_role = $1 AND id_permis = $2";
    static INSERT_PERMISSION_ROL: string = "INSERT INTO permis_role (id_role, id_permis) VALUES ($1, $2)";
    static DELETE_PERMISSION_ROL: string = "DELETE FROM permis_role WHERE id_permis_role = $1";
    static DELETE_PERMISSION_ROL_BY_ID_PROF: string = "DELETE FROM permis_role WHERE id_role = $1";
    static UPDATE_PERMISSION_ROL: string = "UPDATE permis_role SET id_role=$1, id_permis=$2 WHERE id_permis_role=$3;";

    // Querys for survey_version
    static SELECT_VERSIONS_BY_ID_FORM: string = 'SELECT av.*, af.* FROM survey_version as av INNER JOIN survey af ON (av.id_survey = af.id_survey) WHERE av.id_survey = $1 ORDER BY av.creation_date DESC';
    static SELECT_VERSION_BY_ID_FORM_COD_VER: string = 'SELECT * FROM survey_version WHERE id_survey = $1 AND cod_sv = $2 AND version = $3'
    static SELECT_VERSION_BY_ID_FORM_COD_VER_WHEN_UPDATE: string = 'SELECT * FROM survey_version WHERE id_survey = $1 AND cod_sv = $2 AND version = $3 and id_sv <> $4'
    static SELECT_VERSION_BY_ID: string = 'SELECT * FROM survey_version WHERE id_sv = $1'
    static INSERT_VERSION: string = 'INSERT INTO survey_version (id_survey, creation_date, cod_sv, state_sv, version) VALUES ($1, $2, $3, $4, $5)';
    static DELETE_VERSION: string = 'DELETE FROM survey_version WHERE id_sv = $1 ';
    static UPDATE_VERSION: string = 'UPDATE survey_version SET id_survey=$1, creation_date=$2, cod_sv=$3, state_sv=$4, version=$5 WHERE id_sv=$6;';

    // Querys for version_section
    static SELECT_VER_SECTIONS_BY_ID_VER: string = 'SELECT * FROM version_section WHERE id_version = $1 ORDER BY id_ver_sec ASC';
    static SELECT_VER_SECTIONS_INFO_BY_ID_VER: string = 'SELECT * FROM version_section vs INNER JOIN all_section sec ON sec.id_sec = vs.id_sec INNER JOIN survey_section fs ON vs.id_sec = fs.id_sec WHERE vs.id_version = $1 ORDER BY fs.order_ss ASC';
    // static SELECT_VER_SECTIONS_INFO_BY_ID_VER: string = 'SELECT * FROM version_section vs INNER JOIN all_section sec ON sec.id_sec = vs.id_sec INNER JOIN survey_section fs ON vs.id_sec = fs.id_sec WHERE vs.id_version = $1 AND fs.state_fs = true ORDER BY fs.order_ss ASC';
    // static SELECT_SECTIONS_NO_VER: string = 'select * from all_section se where id_sec not in (SELECT vs.id_Sec FROM version_section vs WHERE vs.id_version = $1)';
    static SELECT_SECTIONS_NO_VER: string = 'SELECT * FROM all_section se WHERE id_sec NOT IN (SELECT vs.id_sec FROM version_section vs WHERE vs.id_version = $1) AND id_sec IN (SELECT afs.id_sec FROM survey_section as afs INNER JOIN survey_version as av ON (afs.id_survey = av.id_survey) WHERE afs.id_survey = $2)';
    static INSERT_VER_SECTION: string = 'INSERT INTO version_section (id_version, id_sec) VALUES ($1, $2)';
    static DELETE_VER_SECTION: string = 'DELETE FROM version_section WHERE id_ver_sec = $1';

    // Querys for version_section
    static SELECT_VER_QUESTIONS_BY_ID_VER: string = 'SELECT * FROM version_ques WHERE id_version = $1 ORDER BY id_ver_sec ASC';
    static INSERT_VER_QUESTION: string = 'INSERT INTO version_ques (id_version, id_ques) VALUES ($1, $2)';
    static DELETE_VER_QUESTION: string = 'DELETE FROM version_ques WHERE id_ver_ques = $1';
    static SELECT_VER_QUESTION_INFO_BY_ID_VER: string = 'select * from question que inner join version_ques vq ON vq.id_ques = que.id_ques inner join all_section sec ON sec.id_sec = que.id_sec where vq.id_version = $1 order by que.name_ques ASC';
    // static SELECT_VER_QUESTION_INFO_BY_ID_VER: string = 'SELECT * from question que INNER JOIN version_ques vq ON vq.id_ques = que.id_ques INNER JOIN all_section sec ON sec.id_sec = que.id_sec INNER JOIN survey_section fs ON sec.id_sec = fs.id_sec WHERE vq.id_version = $1 AND fs.state_fs = true ORDER BY que.order_ques ASC';
    static SELECT_QUESTIONS_NO_VER: string = 'select * from question que where id_sec = $1 and id_ques not in (SELECT vs.id_ques FROM version_ques vs WHERE vs.id_version = $2)';
}