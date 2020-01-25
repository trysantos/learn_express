/*
 Navicat Premium Data Transfer

 Source Server         : localhost - mysql
 Source Server Type    : MySQL
 Source Server Version : 100134
 Source Host           : localhost:3306
 Source Schema         : learnexpress

 Target Server Type    : MySQL
 Target Server Version : 100134
 File Encoding         : 65001

 Date: 25/01/2020 15:14:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins`  (
  `idadmin` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `levelid` int(5) NULL DEFAULT NULL,
  PRIMARY KEY (`idadmin`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
